package com.example.Learner.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;  // Explicit import added
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Learner.Service.WorkerOneService;
import com.example.Learner.model.WorkerOne;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/workerone")
public class WorkerOneController {

    @Autowired
    private WorkerOneService workerOneService;

    // Add a worker
    @PostMapping("/add")
    public WorkerOne addWorker(@RequestBody WorkerOne worker) {
        return workerOneService.addData(worker);
    }

    // Get all workers
    @GetMapping
    public List<WorkerOne> getAllWorkers() {
        return workerOneService.getAllWorker();
    }

    // Get worker by ID
    @GetMapping("/{id}")
    public WorkerOne getWorkerById(@PathVariable Long id) {
        return workerOneService.getWorkerById(id).orElse(null);
    }

    // Update a worker
    @PutMapping("/{id}")
    public WorkerOne updateWorker(@PathVariable Long id, @RequestBody WorkerOne worker) {
        return workerOneService.updateWorker(id, worker);
    }

    // Delete a worker
    @DeleteMapping("/{id}")
    public void deleteWorker(@PathVariable Long id) {
        workerOneService.deleteWorker(id);
    }
}
