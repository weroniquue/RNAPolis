package rnapolis.models;

import java.time.Instant;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "awards")
@Data
@Builder
public class Award {

  @Id private String id;

  private String description;
  private Integer year;

  @CreatedDate private Instant createdDate;

  @LastModifiedDate private Instant lastModifiedDate;
}
