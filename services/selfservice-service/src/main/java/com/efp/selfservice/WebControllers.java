package com.efp.selfservice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/")
public class WebControllers {
    @GetMapping("health")
    public ResponseEntity<?> health() { return ResponseEntity.ok(Map.of("status","ok","service","selfservice-service")); }

    @GetMapping("api/v1/employee/profile")
    public ResponseEntity<?> profile() { return ResponseEntity.ok(Map.of("name","张三","status","active")); }

    @PostMapping("api/v1/leave/applications")
    public ResponseEntity<?> leave() { return ResponseEntity.status(201).body(Map.of("id","l1","status","submitted")); }
}
