package com.example.Learner.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Learner.model.SecurityGuardTwo;

public interface SecurityGuardTwoRepo extends JpaRepository<SecurityGuardTwo, Long> {
    // No additional methods needed for now
}
