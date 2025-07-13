package com.example.Learner.Repo;

import com.example.Learner.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoginRepo extends JpaRepository<Login, Long> {
    Optional<Login> findByEmail(String email);
}