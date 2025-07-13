package com.example.Learner.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Learner.model.Profile;

public interface ProfileRepo extends JpaRepository<Profile, Long> {
}
