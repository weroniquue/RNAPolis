package rnapolis.models;

import java.time.Instant;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teamMembers")
@Data
@Builder
public class TeamMember {

  @Id private String id;

  private String name;
  private String surname;
  private String position;
  private String description;
  private String imagePath;

  @CreatedDate private Instant createdDate;

  @LastModifiedDate private Instant lastModifiedDate;
}
