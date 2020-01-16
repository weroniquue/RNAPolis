package rnapolis.controllers;

import java.util.List;
import java.util.stream.Collectors;
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
import rnapolis.models.Publication;
import rnapolis.repositories.PublicationRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/publications")
@AllArgsConstructor
public class PublicationController {

  private PublicationRepository repository;

  @GetMapping("")
  @ResponseStatus(HttpStatus.OK)
  public List<Publication> allPublication() {
    return repository.findAllByOrderByYearDesc();
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Publication findById(@PathVariable String id) {
    return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Publication", id));
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Publication create(@Valid @RequestBody Publication newPublication) {
    return repository.save(newPublication);
  }

  @PutMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Publication update(@PathVariable String id, @Valid @RequestBody Publication updatedPublication) {
    Publication publication = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Publication", id));

    publication.setAuthors(updatedPublication.getAuthors());
    publication.setTitle(updatedPublication.getTitle());
    publication.setJournal(updatedPublication.getJournal());
    publication.setVolumeIssue(updatedPublication.getVolumeIssue());
    publication.setYear(updatedPublication.getYear());
    publication.setPages(updatedPublication.getPages());
    return repository.save(publication);
  }

  @DeleteMapping(value = "/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable("id") String id) {
    Publication publication = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Publication", id));
    repository.delete(publication);
  }
}
