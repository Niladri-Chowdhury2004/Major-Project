package com.example.Learner.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Learner.model.Workers;

public interface WorkersRepo extends JpaRepository<Workers, Long> {

}
