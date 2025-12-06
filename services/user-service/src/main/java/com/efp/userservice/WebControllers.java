package com.efp.userservice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/")
public class WebControllers {

    @GetMapping("health")
    public ResponseEntity<?> health() {
        return ResponseEntity.ok(Map.of("status","ok","service","user-service"));
    }

    public record LoginRequest(String username, String password, Boolean remember) {}

    @PostMapping("api/v1/auth/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        // demo only: accept any non-empty username/password
        if (req.username() == null || req.username().isBlank() || req.password() == null || req.password().isBlank()) {
            return ResponseEntity.status(401).body(Map.of("error","invalid_credentials"));
        }
        return ResponseEntity.ok(Map.of(
                "access_token","demo-token",
                "refresh_token","demo-refresh",
                "expires_in",3600,
                "token_type","Bearer",
                "user", Map.of("username", req.username(), "status", "active")
        ));
    }
}
