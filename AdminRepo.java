package com.example.Learner.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Learner.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Long> {
}
