package rnapolis.controllers;

import java.util.List;
import javax.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import rnapolis.exception.ResourceNotFoundException;
import rnapolis.models.Award;
import rnapolis.repositories.AwardRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/awards")
@AllArgsConstructor
public class AwardController {

  private AwardRepository repository;

  @GetMapping("")
  @ResponseStatus(HttpStatus.OK)
  public List<Award> allAward() {
    return repository.findAllByOrderByYearDesc();
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Award findById(@PathVariable String id) {
    return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Award", id));
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Award create(@Valid @RequestBody Award newAward) {
    return repository.save(newAward);
  }

  @PutMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Award update(@PathVariable String id, @Valid @RequestBody Award updatedAward) {
    Award award = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Award", id));

    award.setDescription(updatedAward.getDescription());
    award.setYear(updatedAward.getYear());
    return repository.save(award);
  }

  @DeleteMapping(value = "/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable("id") String id) {
    Award award = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Award", id));
    repository.delete(award);
  }
}
