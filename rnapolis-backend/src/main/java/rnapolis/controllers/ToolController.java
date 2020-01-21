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
import rnapolis.models.Tool;
import rnapolis.repositories.ToolRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/tools")
@AllArgsConstructor
public class ToolController {

  private ToolRepository repository;

  @GetMapping("")
  @ResponseStatus(HttpStatus.OK)
  public List<Tool> allTool() {
    return repository.findAllByOrderByCategoryDesc()
        .stream()
        .filter(tool -> StringUtils.isNotEmpty(tool.getName()))
        .filter(tool -> StringUtils.isNotEmpty(tool.getLink()))
        .filter(tool -> StringUtils.isNotEmpty(tool.getCategory()))
        .filter(tool -> StringUtils.isNotEmpty(tool.getDescription()))
        .collect(Collectors.toList());
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Tool findById(@PathVariable String id) {
    return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tool", id));
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Tool create(@Valid @RequestBody Tool newTool) {
    return repository.save(newTool);
  }

  @PutMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Tool update(@PathVariable String id, @Valid @RequestBody Tool updatedTool) {
    Tool tool = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tool", id));

    tool.setName(updatedTool.getName());
    tool.setCategory(updatedTool.getCategory());
    tool.setDescription(updatedTool.getDescription());
    tool.setLink(updatedTool.getLink());
    return repository.save(tool);
  }

  @DeleteMapping(value = "/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable("id") String id) {
    Tool tool = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tool", id));
    repository.delete(tool);
  }
}
