package com.example.Learner.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.SecurityGuardTwoRepo;
import com.example.Learner.model.SecurityGuardTwo;

@Service
public class SecurityGuardTwoService {

    private final SecurityGuardTwoRepo rp;

    @Autowired
    public SecurityGuardTwoService(SecurityGuardTwoRepo repo) {
        this.rp = repo;
    }

    // Create
    public SecurityGuardTwo addData(SecurityGuardTwo securityTwo) {
        return rp.save(securityTwo);
    }

    // Read all
    public List<SecurityGuardTwo> getAllSecurity() {
        return rp.findAll();
    }

    // Read by ID
    public SecurityGuardTwo getSecurityById(Long id) {
        return rp.findById(id).orElse(null);
    }

    // Delete
    public void deleteSecurity(Long id) {
        rp.deleteById(id);
    }

    // Update
    public SecurityGuardTwo updateSecurity(Long userId, SecurityGuardTwo updateSecurity) {
        SecurityGuardTwo existingSecurity = rp.findById(userId)
            .orElseThrow(() -> new RuntimeException("Security not found with id " + userId));

        existingSecurity.setFullName(updateSecurity.getFullName());
        existingSecurity.setDateOfBooking(updateSecurity.getDateOfBooking());
        existingSecurity.setDuration(updateSecurity.getDuration());
        existingSecurity.setEmailAddress(updateSecurity.getEmailAddress());
        existingSecurity.setMobileNumber(updateSecurity.getMobileNumber());
        existingSecurity.setLocation(updateSecurity.getLocation());
        existingSecurity.setTimeSlot(updateSecurity.getTimeSlot());

        return rp.save(existingSecurity);
    }
}
