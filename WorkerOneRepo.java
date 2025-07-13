package com.example.Learner.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Learner.model.WorkerOne;

public interface WorkerOneRepo extends JpaRepository<WorkerOne, Long> {
    // No additional methods needed now
}
