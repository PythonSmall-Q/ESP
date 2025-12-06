package com.efp.bookingservice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/")
public class WebControllers {
    @GetMapping("health")
    public ResponseEntity<?> health() { return ResponseEntity.ok(Map.of("status","ok","service","booking-service")); }

    @GetMapping("api/v1/rooms/availability")
    public ResponseEntity<?> availability() { return ResponseEntity.ok(Map.of("rooms", new String[]{"R101","R102"})); }

    @PostMapping("api/v1/bookings")
    public ResponseEntity<?> create() { return ResponseEntity.status(201).body(Map.of("id","b1","status","created")); }
}
