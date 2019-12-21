package rnapolis.repositories;

import java.util.List;
import java.util.Optional;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import rnapolis.models.Award;

public interface AwardRepository extends MongoRepository<Award, String> {

  Optional<Award> findById(ObjectId id);

  List<Award> findAll();

  List<Award> findAllByOrderByYearDesc();
};
