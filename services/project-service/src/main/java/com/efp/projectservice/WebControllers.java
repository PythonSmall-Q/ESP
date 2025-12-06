package com.efp.projectservice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class WebControllers {
    @GetMapping("health")
    public ResponseEntity<?> health() { return ResponseEntity.ok(Map.of("status","ok","service","project-service")); }

    public record NewProject(String name) {}

    @PostMapping("api/v1/projects")
    public ResponseEntity<?> create(@RequestBody NewProject req) {
        if (req.name() == null || req.name().isBlank()) return ResponseEntity.badRequest().body(Map.of("error","invalid"));
        return ResponseEntity.status(201).body(Map.of("id","p1","name",req.name()));
    }

    @GetMapping("api/v1/projects/{id}/gantt")
    public ResponseEntity<?> gantt(@PathVariable String id) {
        return ResponseEntity.ok(Map.of("projectId", id, "data", List.of(Map.of("task","Init","start","2025-01-01","end","2025-01-03"))));
    }
}
