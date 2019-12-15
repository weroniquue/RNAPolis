package rnapolis.repositories;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import rnapolis.models.Award;

public interface AwardRepository extends MongoRepository<Award, String> {

  Award findById(ObjectId id);

  List<Award> findAll();
}
