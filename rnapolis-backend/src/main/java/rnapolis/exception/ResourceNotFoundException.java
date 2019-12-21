package rnapolis.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

  public ResourceNotFoundException(String resourceName, String id) {
    super(String.format("%s not found", resourceName));
    Logger logger = LoggerFactory.getLogger(ResourceNotFoundException.class);
    logger.error(String.format("%s with id %s not found", resourceName, id));
  }
}
