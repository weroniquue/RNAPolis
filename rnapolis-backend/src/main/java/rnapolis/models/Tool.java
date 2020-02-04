package rnapolis.models;

import java.time.Instant;
import java.util.List;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tools")
@Data
@Builder
public class Tool {

  @Id private String id;


  private String name;
  private String link;
  private String description;
  private List<String> categories;
  private Integer order;

  @CreatedDate private Instant createdDate;

  @LastModifiedDate private Instant lastModifiedDate;
}
