package com.example.Learner.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Learner.model.WorkerTwo;

public interface WorkerTwoRepo extends JpaRepository<WorkerTwo, Long> {
    // No additional methods needed now
}