package rnapolis.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import rnapolis.models.Award;

import java.util.List;

public interface AwardRepository extends MongoRepository<Award, String> {

    List<Award> findAllByOrderByYearDesc();

}
