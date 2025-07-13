package com.example.Learner.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.WorkersRepo;
import com.example.Learner.model.Workers;

@Service
public class WorkerService {

    @Autowired
    WorkersRepo wr;

    public Workers addData(Workers workers) {
        return wr.save(workers);
    }

    public List<Workers> getAllWorkers() {
        return wr.findAll();
    }

    public Workers getWorkerById(Long id) {
        Optional<Workers> opt = wr.findById(id);
        return opt.orElse(null);
    }

    public Workers updateWorker(Long id, Workers updatedWorker) {
        return wr.findById(id).map(worker -> {
            worker.setFirstName(updatedWorker.getFirstName());
            worker.setLastName(updatedWorker.getLastName());
            worker.setPhNo(updatedWorker.getPhNo());
            return wr.save(worker);
        }).orElse(null);
    }

    public String deleteWorker(Long id) {
        if (wr.existsById(id)) {
            wr.deleteById(id);
            return "Worker deleted successfully.";
        } else {
            return "Worker not found.";
        }
    }
}
