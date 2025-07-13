package com.example.Learner.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Learner.Service.WorkerService;
import com.example.Learner.model.Workers;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/workers")
public class WorkerController {

    @Autowired
    WorkerService service;

    @PostMapping("/add")
    public Workers addWorker(@RequestBody Workers worker) {
        return service.addData(worker);
    }

    @GetMapping
    public List<Workers> getAllWorkers() {
        return service.getAllWorkers();
    }

    @GetMapping("/{id}")
    public Workers getWorkerById(@PathVariable Long id) {
        return service.getWorkerById(id);
    }

    @PutMapping("/{id}")
    public Workers updateWorker(@PathVariable Long id, @RequestBody Workers updatedWorker) {
        return service.updateWorker(id, updatedWorker);
    }

    @DeleteMapping("/{id}")
    public String deleteWorker(@PathVariable Long id) {
        return service.deleteWorker(id);
    }
}
