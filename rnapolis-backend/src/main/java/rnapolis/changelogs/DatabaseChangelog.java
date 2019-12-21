package rnapolis.changelogs;

import com.github.mongobee.changeset.ChangeLog;
import com.github.mongobee.changeset.ChangeSet;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import rnapolis.models.Award;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@ChangeLog
public class DatabaseChangelog {
    private static final Gson GSON = new GsonBuilder().create();

    private void importFromFile(String filePath, String collectionName, DB db) throws IOException {
        ClassLoader classLoader = ClassLoader.getSystemClassLoader();
        File file = new File(Objects.requireNonNull(classLoader.getResource(filePath)).getFile());
        String jsonString = new String(Files.readAllBytes(file.toPath()));

        List<Award> awards = GSON.fromJson(jsonString, new TypeToken<List<Award>>() {
        }.getType());

        awards.forEach(item -> {
            item.setCreatedDate(Instant.now());
            item.setLastModifiedDate(Instant.now());
        });

        List<DBObject> dbDocuments = awards
                .stream()
                .map(GSON::toJson)
                .map(item -> GSON.fromJson(item, DBObject.class))
                .collect(Collectors.toList());

        DBCollection collection = db.getCollection(collectionName);
        collection.insert(dbDocuments);
    }

    @ChangeSet(order = "001", id = "initialAwardsData", author = "BlazejPiaskowski")
    public void initialAwardsData(DB db) throws IOException {
        importFromFile("data/awards.json", "awards", db);
    }
}
