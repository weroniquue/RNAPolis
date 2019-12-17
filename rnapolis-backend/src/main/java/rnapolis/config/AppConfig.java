package rnapolis.config;

import com.github.mongobee.Mongobee;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class AppConfig {

  @Value("${spring.data.mongodb.uri}")
  private String mongoUri;

  @Value("${mongo.clientUri}")
  private String mongoClientUri;

  @Value("${mongo.dbname}")
  private String mongoDbName;

  @Bean
  public Mongobee mongobee() {
    Mongobee runner = new Mongobee(mongoUri);
    runner.setChangeLogsScanPackage("rnapolis.changelogs");

    MongoClient mongoClient = new MongoClient(new MongoClientURI(mongoClientUri));
    runner.setMongoTemplate(new MongoTemplate(mongoClient, mongoDbName));

    return runner;
  }
}
