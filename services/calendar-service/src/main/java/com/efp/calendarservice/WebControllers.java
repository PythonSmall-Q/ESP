package com.efp.calendarservice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class WebControllers {
    @GetMapping("health")
    public ResponseEntity<?> health() { return ResponseEntity.ok(Map.of("status","ok","service","calendar-service")); }

    @GetMapping("api/v1/calendars")
    public ResponseEntity<?> calendars() { return ResponseEntity.ok(List.of(Map.of("id","c1","name","个人日历"))); }

    public record EventBody(String title) {}

    @PostMapping("api/v1/events")
    public ResponseEntity<?> create(@RequestBody EventBody body) {
        if (body.title() == null || body.title().isBlank()) return ResponseEntity.badRequest().body(Map.of("error","invalid"));
        return ResponseEntity.status(201).body(Map.of("id","e1","title",body.title()));
    }
}
