package com.efp.approvalservice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class WebControllers {
    @GetMapping("health")
    public ResponseEntity<?> health() { return ResponseEntity.ok(Map.of("status","ok","service","approval-service")); }

    public record ProcessDef(String name, String bpmnXml) {}

    @PostMapping("api/v1/process-definitions")
    public ResponseEntity<?> createProcess(@RequestBody ProcessDef def) {
        if (def.name() == null || def.bpmnXml() == null) return ResponseEntity.badRequest().body(Map.of("error","invalid"));
        return ResponseEntity.status(201).body(Map.of("id","demo-process-id","name",def.name()));
    }

    @GetMapping("api/v1/tasks")
    public ResponseEntity<?> tasks() { return ResponseEntity.ok(List.of(Map.of("id","t1","name","审批任务"))); }

    @PostMapping("api/v1/tasks/{id}/complete")
    public ResponseEntity<?> complete(@PathVariable String id) { return ResponseEntity.ok(Map.of("id",id,"status","completed")); }
}
