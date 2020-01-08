package rnapolis.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import rnapolis.models.User;
import rnapolis.repositories.UserRepository;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

//@RunWith(MockitoJUnitRunner.class)\
@ExtendWith(MockitoExtension.class)
class CustomUserDetailsServiceTest {

    @InjectMocks
    private CustomUserDetailsService uut;

    @Mock
    private UserRepository userRepository;

    @Test
    void shouldReturnUser() {
        // given
        when(userRepository.findByUsername(anyString())).thenReturn(getUser());
        SimpleGrantedAuthority adminRole = new SimpleGrantedAuthority("ADMIN");


        // when
        UserDetails result = uut.loadUserByUsername("username");

        // then
        assertThat(result).isNotNull();
        assertThat(result.getUsername()).isEqualTo("username");
        assertThat(result.getPassword()).isEqualTo("pass");
        assertThat(result.getAuthorities().size()).isEqualTo(1);
        assertThat(result.getAuthorities().contains(adminRole)).isTrue();
    }

    @Test
    void shouldReturnUserNotFoundException() {
        // given
        when(userRepository.findByUsername(anyString())).thenReturn(Optional.empty());

        // when + then
        assertThrows(UsernameNotFoundException.class, () -> uut.loadUserByUsername("username"));
    }

    private Optional<User> getUser() {
        return Optional.ofNullable(
                User.builder().username("username").password("pass").build());
    }
}
