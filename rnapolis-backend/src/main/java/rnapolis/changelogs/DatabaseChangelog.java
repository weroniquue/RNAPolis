package rnapolis.changelogs;

import com.github.mongobee.changeset.ChangeLog;
import com.github.mongobee.changeset.ChangeSet;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.mongodb.core.MongoTemplate;
import rnapolis.models.Award;

@ChangeLog
public class DatabaseChangelog {

  @ChangeSet(order = "001", id = "initialAwardsData", author = "BlazejPiaskowski")
  public void initialAwardsData(MongoTemplate template) {

    List<Award> awardList = new ArrayList<>();

    awardList.add(
        Award.builder()
            .description(
                "Rector scientific award for \"New computational methods in RNA structural bioinformatics\" granted to Marta Szachniuk, Maciej Antczak and Tomasz Zok by the Rector of Poznan University of Technology")
            .year(2019)
            .createdDate(Instant.now())
            .lastModifiedDate(Instant.now())
            .build());

    awardList.add(
        Award.builder()
            .description(
                "Award for PhD thesis \"Algorithmic aspects of RNA structure similarity analysis\" written by Tomasz Zok, awarded by the Scientific Council of the Faculty of Computing, Poznan University of Technology")
            .year(2019)
            .createdDate(Instant.now())
            .lastModifiedDate(Instant.now())
            .build());

    awardList.add(
        Award.builder()
            .description(
                "Award for outstanding PhD thesis granted to Tomasz Zok for PhD thesis \"Algorithmic Aspects of RNA Structure Similarity Analysis\" by the City of Poznan")
            .year(2019)
            .createdDate(Instant.now())
            .lastModifiedDate(Instant.now())
            .build());

    awardList.add(
        Award.builder()
            .description(
                "Scientific Award of the IBCh PAS Research Council for pseudoknot-annotating algorithms selected the best experimental work of the year 2018 (to Marta Szachniuk, Mariusz Popenda, Ryszard W. Adamiak)")
            .year(2018)
            .createdDate(Instant.now())
            .lastModifiedDate(Instant.now())
            .build());

    awardList.add(
        Award.builder()
            .description(
                "Scholarship of the Minister of Science and Higher Education, Poland for outstanding scientific achievements in structural bioinformatics granted to Michal Zurkowski")
            .year(2018)
            .createdDate(Instant.now())
            .lastModifiedDate(Instant.now())
            .build());

    template.insertAll(awardList);
  }
}
