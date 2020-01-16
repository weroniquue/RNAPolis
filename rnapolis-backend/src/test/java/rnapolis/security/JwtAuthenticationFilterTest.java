package rnapolis.security;

import org.apache.commons.lang3.StringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.MockFilterChain;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import rnapolis.services.CustomUserDetailsService;

import javax.servlet.ServletException;
import java.io.IOException;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static rnapolis.security.JwtAuthenticationFilter.AUTHORIZATION_HEADER;

@ExtendWith(MockitoExtension.class)
class JwtAuthenticationFilterTest {

    private static final String TOKEN = "Bearer 260bce87-6be9-4897-add7-b3b675952538";
    private static final String TEST_URI = "/TEST_URI";
    private static final String USERNAME = "username";
    @InjectMocks
    private JwtAuthenticationFilter jwtAuthenticationFilter;
    @Mock
    private JwtTokenProvider tokenProvider;
    @Mock
    private CustomUserDetailsService customUserDetailsService;
    private MockHttpServletResponse response;
    private MockFilterChain filterChain;

    @BeforeEach
    void setUp() {
        this.response = new MockHttpServletResponse();
        this.filterChain = new MockFilterChain();
    }

    @Test
    void testDoFilterInternalPositiveScenarioWhenTokenIsInHeader() throws ServletException, IOException {
        // given
        MockHttpServletRequest request = getMockHttpServletRequest();
        when(tokenProvider.validateToken(anyString())).thenReturn(true);
        when(tokenProvider.getUsernameFromJWT(anyString())).thenReturn(USERNAME);
        when(customUserDetailsService.loadUserByUsername(anyString())).thenReturn(getUserDetails());

        // when
        jwtAuthenticationFilter.doFilterInternal(request, response, filterChain);

        // then
        assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
        assertThat(SecurityContextHolder.getContext().getAuthentication().isAuthenticated()).isTrue();
        assertThat(SecurityContextHolder.getContext().getAuthentication().getPrincipal()).isNotNull();
        assertThat(SecurityContextHolder.getContext().getAuthentication().getName()).isEqualTo(USERNAME);
        assertThat(SecurityContextHolder.getContext().getAuthentication().getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"))).isTrue();
    }

    @Test
    void testDoFilterInternalNegativeScenarioWhenUserNotFound() {
        // given
        MockHttpServletRequest request = getMockHttpServletRequest();
        when(tokenProvider.validateToken(anyString())).thenReturn(true);
        when(tokenProvider.getUsernameFromJWT(anyString())).thenReturn(StringUtils.EMPTY);
        when(customUserDetailsService.loadUserByUsername(anyString())).thenThrow(new UsernameNotFoundException("User not found"));

        // when + then
        assertThrows(UsernameNotFoundException.class, () -> jwtAuthenticationFilter.doFilterInternal(request, response, filterChain));
    }

    private MockHttpServletRequest getMockHttpServletRequest() {
        MockHttpServletRequest request = new MockHttpServletRequest();
        request.addHeader(AUTHORIZATION_HEADER, TOKEN);
        request.setRequestURI(TEST_URI);
        return request;
    }

    private UserDetails getUserDetails() {
        List<SimpleGrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ADMIN"));
        return new User("username", "password", authorities);
    }
}
