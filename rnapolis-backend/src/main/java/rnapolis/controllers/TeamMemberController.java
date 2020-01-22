package rnapolis.controllers;

import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.StringUtils;
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
import rnapolis.models.TeamMember;
import rnapolis.repositories.TeamMemberRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/team-members")
@AllArgsConstructor
public class TeamMemberController {

  private TeamMemberRepository repository;

  @GetMapping("")
  @ResponseStatus(HttpStatus.OK)
  public List<TeamMember> allTeamMember() {
    return repository.findAllByOrderBySurnameDesc()
        .stream()
        .filter(teamMember -> StringUtils.isNotEmpty(teamMember.getName()))
        .filter(teamMember -> StringUtils.isNotEmpty(teamMember.getSurname()))
        .collect(Collectors.toList());
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public TeamMember findById(@PathVariable String id) {
    return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("TeamMember", id));
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public TeamMember create(@Valid @RequestBody TeamMember newTeamMember) {
    //todo - handle images
    return repository.save(newTeamMember);
  }

  @PutMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public TeamMember update(@PathVariable String id, @Valid @RequestBody TeamMember updatedTeamMember) {
    TeamMember teamMember = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("TeamMember", id));

    teamMember.setName(updatedTeamMember.getName());
    teamMember.setSurname(updatedTeamMember.getSurname());
    teamMember.setDescription(updatedTeamMember.getDescription());
    teamMember.setPosition(updatedTeamMember.getPosition());
    //todo - handle images
    teamMember.setImagePath(updatedTeamMember.getImagePath());
    return repository.save(teamMember);
  }

  @DeleteMapping(value = "/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable("id") String id) {
    TeamMember teamMember = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("TeamMember", id));
    //todo - handle images
    repository.delete(teamMember);
  }
}
