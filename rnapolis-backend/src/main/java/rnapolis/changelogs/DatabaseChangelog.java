package rnapolis.changelogs;

import com.github.mongobee.changeset.ChangeLog;
import com.github.mongobee.changeset.ChangeSet;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.mongodb.client.model.Collation;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.core.MongoTemplate;
import rnapolis.models.Award;
import rnapolis.models.Publication;
import rnapolis.models.Tool;
import rnapolis.models.User;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Slf4j
@ChangeLog
public class DatabaseChangelog {
    private static final Gson GSON = new GsonBuilder().create();
    private static final Logger logger = LoggerFactory.getLogger(DatabaseChangelog.class);
    private static final String HASH_PREFIX = "$2a";

    @ChangeSet(order = "000", id = "initialUsersData", author = "", runAlways = true)
    public void initialUsersData(MongoTemplate mongoTemplate, Environment environment) {
        mongoTemplate.dropCollection("users");
        String user = Optional.ofNullable(environment.getProperty("admin.name"))
                .orElseThrow(() -> new IllegalStateException("Property admin.name in config is required"));
        String password = Optional.ofNullable(environment.getProperty("admin.password"))
                .orElseThrow(() -> new IllegalStateException("Property admin.password in config is required"));
        password = HASH_PREFIX + password.substring(HASH_PREFIX.length());
        insertUser(mongoTemplate, user, password);
    }

    @ChangeSet(order = "001", id = "initialAwardsData", author = "")
    public void initialAwardsData(MongoTemplate mongoTemplate, Environment environment) {
        Optional.ofNullable(environment.getProperty("awards.filePath"))
                .ifPresent(path -> {
                    String jsonString = importFromFile(path);
                    List<Award> objects = GSON.fromJson(jsonString, new TypeToken<List<Award>>() {
                    }.getType());
                    objects.forEach(mongoTemplate::save);
                });
    }

    @Profile("dev")
    @ChangeSet(order = "002", id = "initialAwardsDataOnDev", author = "")
    public void initialAwardsDataOnDev(MongoTemplate mongoTemplate, Environment environment) {
        Optional.ofNullable(environment.getProperty("awards.filePath"))
                .ifPresent(path -> Optional.ofNullable(ClassLoader.getSystemClassLoader().getResource(path)).ifPresent(url -> {
                    try {
                        String jsonString = getJsonString(url);
                        List<Award> objects = GSON.fromJson(jsonString, new TypeToken<List<Award>>() {
                        }.getType());
                        objects.forEach(mongoTemplate::save);
                    } catch (URISyntaxException e) {
                        logger.info("Can't find file {} in resources", path);
                    }
                }));
    }

    @ChangeSet(order = "003", id = "initialPublicationsData", author = "")
    public void initialPublicationsData(MongoTemplate mongoTemplate, Environment environment) {
        Optional.ofNullable(environment.getProperty("publications.filePath"))
                .ifPresent(path -> {
                    String jsonString = importFromFile(path);
                    List<Publication> objects = GSON.fromJson(jsonString, new TypeToken<List<Publication>>() {
                    }.getType());
                    objects.forEach(mongoTemplate::save);
                });
    }

    @Profile("dev")
    @ChangeSet(order = "004", id = "initialPublicationsDataOnDev", author = "")
    public void initialPublicationsDataOnDev(MongoTemplate mongoTemplate, Environment environment) {
        Optional.ofNullable(environment.getProperty("publications.filePath"))
                .ifPresent(path -> Optional.ofNullable(ClassLoader.getSystemClassLoader().getResource(path)).ifPresent(url -> {
                    try {
                        String jsonString = getJsonString(url);
                        List<Publication> objects = GSON.fromJson(jsonString, new TypeToken<List<Publication>>() {
                        }.getType());
                        objects.forEach(mongoTemplate::save);
                    } catch (URISyntaxException e) {
                        logger.info("Can't find file {} in resources", path);
                    }
                }));
    }

    @ChangeSet(order = "005", id = "initialToolsData", author = "")
    public void initialToolsData(MongoTemplate mongoTemplate, Environment environment) {
        Optional.ofNullable(environment.getProperty("tools.filePath"))
                .ifPresent(path -> {
                    String jsonString = importFromFile(path);
                    List<Tool> objects = GSON.fromJson(jsonString, new TypeToken<List<Tool>>() {
                    }.getType());
                    objects.forEach(mongoTemplate::save);
                });
    }

    @Profile("dev")
    @ChangeSet(order = "006", id = "initialToolsDataOnDev", author = "")
    public void initialToolsDataOnDev(MongoTemplate mongoTemplate, Environment environment) {
        Optional.ofNullable(environment.getProperty("tools.filePath"))
                .ifPresent(path -> Optional.ofNullable(ClassLoader.getSystemClassLoader().getResource(path)).ifPresent(url -> {
                    try {
                        String jsonString = getJsonString(url);
                        List<Tool> objects = GSON.fromJson(jsonString, new TypeToken<List<Tool>>() {
                        }.getType());
                        objects.forEach(mongoTemplate::save);
                    } catch (URISyntaxException e) {
                        logger.info("Can't find file {} in resources", path);
                    }
                }));
    }

    private void insertUser(MongoTemplate mongoTemplate, String user, String encodedPassword) {
        mongoTemplate.save(User.builder().username(user).password(encodedPassword).build());
    }

    private String importFromFile(String filePath) {
        File file = new File(filePath);
        try {
            return new String(Files.readAllBytes(file.toPath()));
        } catch (IOException e) {
            logger.info("Can't find file {} to load data", filePath);
        }
        return Collections.emptyList().toString();
    }

    private String getJsonString(URL url) throws URISyntaxException {
        String absolutePath = url.toURI().getPath();
        return importFromFile(absolutePath);
    }

}
