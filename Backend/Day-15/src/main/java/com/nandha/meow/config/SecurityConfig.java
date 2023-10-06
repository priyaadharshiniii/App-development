package com.nandha.meow.config;


import java.util.Arrays;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.nandha.meow.constant.Api;

import lombok.RequiredArgsConstructor;
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {
	  private final AuthenticationProvider authenticationProvider;
      private final JwtAuthenticationFilter jwtAuthenticationFilter;
      @Bean
      public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
          httpSecurity
              .cors(cors -> cors.configurationSource(corsConfigurationSource()))
              .csrf(csrf -> csrf.disable())
              .authorizeHttpRequests(authorize -> authorize
                  .requestMatchers(new AntPathRequestMatcher("/**")).permitAll())
              .sessionManagement(session -> session
                  .sessionCreationPolicy(SessionCreationPolicy.STATELESS));

          return httpSecurity.build();
      }
	  @Bean
      public CorsConfigurationSource corsConfigurationSource() {
              CorsConfiguration configuration = new CorsConfiguration();
              configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
              configuration.setAllowCredentials(true);
              configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
              configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
              UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
              source.registerCorsConfiguration("/**", configuration);
              return source;
      }
}