package rnapolis.models;

import java.time.Instant;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "publications")
@Data
@Builder
public class Publication {

    @Id
    private String id;

    private String authors;
    private String title;
    private String editors;
    private String journal;
    private String volumeIssue;
    private String publishers;
    private Integer year;
    private String pages;
    private String link;

    @CreatedDate
    private Instant createdDate;

    @LastModifiedDate
    private Instant lastModifiedDate;
}
