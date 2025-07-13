package com.example.Learner.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Learner.model.Security;

public interface SecurityRepo extends JpaRepository<Security, Long> {
}
