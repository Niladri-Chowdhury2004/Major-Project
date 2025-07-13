package com.example.Learner.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.ProfileRepo;
import com.example.Learner.model.Profile;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepo pr;

    public Profile addData(Profile profile) {
        return pr.save(profile);
    }

    public List<Profile> getAllProfile() {
        return pr.findAll();
    }

    public Profile getProfileById(Long id) {
        return pr.findById(id).orElse(null);
    }

    public void deleteprofile(Long id) {
        pr.deleteById(id);
    }

    public Profile UpadateProfile(Long userId, Profile updateProfile) {
        Profile existingProfile = pr.findById(userId)
            .orElseThrow(() -> new RuntimeException("Profile not found with id " + userId));
        existingProfile.setFirstName(updateProfile.getFirstName());
        existingProfile.setLastName(updateProfile.getLastName());
        existingProfile.setEmail(updateProfile.getEmail());
        existingProfile.setPhoneNumber(updateProfile.getPhoneNumber());
        existingProfile.setRole(updateProfile.getRole());
        // Usually we don't update the ID
        return pr.save(existingProfile);
    }
}
