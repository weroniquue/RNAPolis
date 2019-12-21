package rnapolis.changelogs;

import com.github.mongobee.changeset.ChangeLog;
import com.github.mongobee.changeset.ChangeSet;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@ChangeLog
public class DatabaseChangelog {
    private static final Gson GSON = new GsonBuilder().create();

    private void importFromFile(String filePath, String collectionName, DB db) throws IOException {
        ClassLoader classLoader = ClassLoader.getSystemClassLoader();
        File file = new File(Objects.requireNonNull(classLoader.getResource(filePath)).getFile());
        String jsonString = new String(Files.readAllBytes(file.toPath()));

        List<Map<String, String>> awards = GSON.fromJson(jsonString, new TypeToken<List<Map<String, String>>>() {
        }.getType());

        DBCollection collection = db.getCollection(collectionName);
        awards.forEach(map -> collection.save(new BasicDBObject(map)));
    }

    @ChangeSet(order = "001", id = "initialAwardsData", author = "BlazejPiaskowski")
    public void initialAwardsData(DB db) throws IOException {
        importFromFile("data/awards.json", "awards", db);
    }
}
