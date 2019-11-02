package rnapolis.controllers;

import javax.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rnapolis.requests.AuthenticationRequest;
import rnapolis.responses.JwtAuthenticationResponse;
import rnapolis.security.JwtTokenProvider;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthenticationController {

    AuthenticationManager authenticationManager;
    JwtTokenProvider jwtTokenProvider;

  @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthenticationRequest request) {

      authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(),
                request.getPassword()
            )
        );
//        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtTokenProvider.generateToken(request.getUsername());
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }
}
