package com.example.Learner.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;  // <-- Added import here
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Learner.Service.WorkerTwoService;
import com.example.Learner.model.WorkerTwo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/workertwo")
public class WorkerTwoController {

    @Autowired
    private WorkerTwoService workerTwoService;

    // Add a worker
    @PostMapping("/add")
    public WorkerTwo addWorker(@RequestBody WorkerTwo worker) {
        return workerTwoService.addData(worker);
    }

    // Get all workers
    @GetMapping
    public List<WorkerTwo> getAllWorkers() {
        return workerTwoService.getAllWorker();
    }

    // Get worker by ID
    @GetMapping("/{id}")
    public WorkerTwo getWorkerById(@PathVariable Long id) {
        return workerTwoService.getWorkerById(id).orElse(null);
    }

    // Update a worker
    @PutMapping("/{id}")
    public WorkerTwo updateWorker(@PathVariable Long id, @RequestBody WorkerTwo worker) {
        return workerTwoService.updateWorker(id, worker);
    }

    // Delete a worker
    @DeleteMapping("/{id}")
    public void deleteWorker(@PathVariable Long id) {
        workerTwoService.deleteWorker(id);
    }
}
