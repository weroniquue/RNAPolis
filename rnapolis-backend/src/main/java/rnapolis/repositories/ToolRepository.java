package rnapolis.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import rnapolis.models.Tool;

import java.util.List;

public interface ToolRepository extends MongoRepository<Tool, String> {

  List<Tool> findAllByOrderByCategoryDesc();

}
