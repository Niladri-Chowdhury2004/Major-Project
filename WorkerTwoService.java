package com.example.Learner.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.WorkerTwoRepo;
import com.example.Learner.model.WorkerTwo;

@Service
public class WorkerTwoService {

    @Autowired
    private WorkerTwoRepo wr;

    public WorkerTwo addData(WorkerTwo workers) {
        return wr.save(workers);
    }

    public List<WorkerTwo> getAllWorker() {
        return wr.findAll();
    }

    public Optional<WorkerTwo> getWorkerById(Long id) {
        return wr.findById(id);
    }

    public WorkerTwo updateWorker(Long id, WorkerTwo updatedWorker) {
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