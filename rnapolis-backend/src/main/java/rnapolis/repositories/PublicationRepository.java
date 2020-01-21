package rnapolis.repositories;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import rnapolis.models.Publication;

public interface PublicationRepository extends MongoRepository<Publication, String> {

    List<Publication> findAllByOrderByYearDesc();

}
