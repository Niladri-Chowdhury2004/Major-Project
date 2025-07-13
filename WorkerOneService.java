package com.example.Learner.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.WorkerOneRepo;
import com.example.Learner.model.WorkerOne;

@Service
public class WorkerOneService {

    @Autowired
    private WorkerOneRepo wr;

    public WorkerOne addData(WorkerOne workers) {
        return wr.save(workers);
    }

    public List<WorkerOne> getAllWorker() {
        return wr.findAll();
    }

    public Optional<WorkerOne> getWorkerById(Long id) {
        return wr.findById(id);
    }

    public WorkerOne updateWorker(Long id, WorkerOne updatedWorker) {
        return wr.findById(id).map(worker -> {
            worker.setFullName(updatedWorker.getFullName());
            worker.setMobileNumber(updatedWorker.getMobileNumber());
            worker.setEmailAddress(updatedWorker.getEmailAddress());
            worker.setLocation(updatedWorker.getLocation());
            worker.setDateOfBooking(updatedWorker.getDateOfBooking());
            worker.setTimeSlot(updatedWorker.getTimeSlot());
            worker.setDuration(updatedWorker.getDuration());
            return wr.save(worker);
        }).orElseGet(() -> {
            updatedWorker.setUserId(id);
            return wr.save(updatedWorker);
        });
    }

    public void deleteWorker(Long id) {
        wr.deleteById(id);
    }
}
