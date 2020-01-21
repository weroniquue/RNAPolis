package rnapolis.config;

import com.github.mongobee.Mongobee;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class AppConfig {

  @Value("${mongo.clientUri}")
  private String mongoClientUri;

  @Value("${mongo.dbname}")
  private String mongoDbName;

  @Autowired
  private Environment environment;

  @Bean
  public Mongobee mongobee() {
    Mongobee runner = new Mongobee(mongoClientUri+"/"+mongoDbName);
    runner.setSpringEnvironment(environment);
    runner.setChangeLogsScanPackage("rnapolis.changelogs");

    MongoClient mongoClient = new MongoClient(new MongoClientURI(mongoClientUri));
    runner.setMongoTemplate(new MongoTemplate(mongoClient, mongoDbName));

    return runner;
  }


}
