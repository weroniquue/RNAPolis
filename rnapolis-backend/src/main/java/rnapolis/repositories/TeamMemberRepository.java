package rnapolis.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import rnapolis.models.TeamMember;

import java.util.List;

public interface TeamMemberRepository extends MongoRepository<TeamMember, String> {

  List<TeamMember> findAllByOrderBySurnameDesc();

}
