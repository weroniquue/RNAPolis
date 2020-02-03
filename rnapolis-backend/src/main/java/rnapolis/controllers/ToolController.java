package rnapolis.controllers;

import lombok.AllArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rnapolis.exception.ResourceNotFoundException;
import rnapolis.models.Tool;
import rnapolis.repositories.ToolRepository;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/tools")
@AllArgsConstructor
public class ToolController {

  private ToolRepository repository;

  @GetMapping("")
  @ResponseStatus(HttpStatus.OK)
  public List<Tool> allTool() {
    return repository.findAllByOrderByOrderAsc().stream()
        .filter(this::verifyTool)
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
    return repository
        .findById(id)
        .map(
            tool -> {
              tool.setName(updatedTool.getName());
              tool.setCategories(updatedTool.getCategories());
              tool.setDescription(updatedTool.getDescription());
              tool.setLink(updatedTool.getLink());
              return tool;
            })
        .map(tool -> repository.save(tool))
        .orElseThrow(() -> new ResourceNotFoundException("Tool", id));
  }

  @DeleteMapping(value = "/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable("id") String id) {
    Tool tool =
        repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tool", id));
    repository.delete(tool);
  }

  private boolean verifyTool(Tool tool) {
    return StringUtils.isNotEmpty(tool.getName())
        && StringUtils.isNotEmpty(tool.getLink())
        && StringUtils.isNotEmpty(tool.getDescription());
  }
}
