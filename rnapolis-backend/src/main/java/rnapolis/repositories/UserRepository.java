package rnapolis.repositories;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import rnapolis.models.User;

public interface UserRepository extends MongoRepository<User, String> {

  Optional<User> findByUsername(String username);
}
