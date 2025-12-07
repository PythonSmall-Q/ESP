package com.efp.bookingservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;
import javax.validation.Valid;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/")
@Validated
public class WebControllers {
    @GetMapping("health")
    public ResponseEntity<?> health() { return ResponseEntity.ok(Map.of("status","ok","service","booking-service")); }

    @GetMapping("api/v1/rooms/availability")
    public ResponseEntity<?> availability(@RequestParam(required = false) String building) {
        String[] rooms = new String[]{"R101","R102"};
        return ResponseEntity.ok(Map.of("building", building == null ? "main" : building, "rooms", rooms));
    }

    @PostMapping("api/v1/bookings")
    public ResponseEntity<?> create(@Valid @RequestBody CreateBookingRequest req) {
        if (!req.roomId.startsWith("R")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error","invalid_room","message","Room ID must start with 'R'"));
        }
        String id = UUID.randomUUID().toString();
        Booking booking = new Booking(id, req.roomId, req.title, req.startTime, req.endTime);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "id", booking.id,
                "status", "created",
                "roomId", booking.roomId,
                "title", booking.title,
                "startTime", booking.startTime.toString(),
                "endTime", booking.endTime.toString()
        ));
    }

    public static class CreateBookingRequest {
        @NotBlank
        public String roomId;
        @NotBlank
        public String title;
        @NotNull @Future
        public LocalDateTime startTime;
        @NotNull @Future
        public LocalDateTime endTime;
    }

    public static class Booking {
        public final String id;
        public final String roomId;
        public final String title;
        public final LocalDateTime startTime;
        public final LocalDateTime endTime;
        public Booking(String id, String roomId, String title, LocalDateTime startTime, LocalDateTime endTime) {
            this.id = id; this.roomId = roomId; this.title = title; this.startTime = startTime; this.endTime = endTime;
        }
    }
}
