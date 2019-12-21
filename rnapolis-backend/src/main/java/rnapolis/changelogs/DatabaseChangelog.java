package rnapolis.changelogs;

import com.github.mongobee.changeset.ChangeLog;
import com.github.mongobee.changeset.ChangeSet;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

@ChangeLog
public class DatabaseChangelog {

  private void importFromFile(String filePath, String collectionName, DB db)
      throws IOException, ParseException {
    ClassLoader classLoader = ClassLoader.getSystemClassLoader();
    File file = new File(Objects.requireNonNull(classLoader.getResource(filePath)).getFile());
    String jsonString = new String(Files.readAllBytes(file.toPath()));

    JSONObject parsedJson;
    JSONParser helper = new JSONParser();
    parsedJson = (JSONObject) helper.parse(jsonString);

    JSONArray array = (JSONArray) parsedJson.get(collectionName);

    DBCollection collection = db.getCollection(collectionName);

    List<DBObject> dbDocuments = new ArrayList<>();

    array.forEach(
        jsonObject -> {
          DBObject dbDocument = (DBObject) JSON.parse(jsonObject.toString());
          dbDocuments.add(dbDocument);
        });

    collection.insert(dbDocuments);
  }

  @ChangeSet(order = "001", id = "initialAwardsData", author = "BlazejPiaskowski", runAlways = true)
  public void initialAwardsData(DB db) throws IOException, ParseException {
    importFromFile("data/awards.json", "awards", db);
  }
}
