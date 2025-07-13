package com.example.Learner.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.SecurityGuardOneRepo;
import com.example.Learner.model.SecurityGuardOne;

@Service
public class SecurityGuardOneService {

    private final SecurityGuardOneRepo rp;

    @Autowired
    public SecurityGuardOneService(SecurityGuardOneRepo repo) {
        this.rp = repo;
    }

    public SecurityGuardOne addData(SecurityGuardOne securityOne) {
        return rp.save(securityOne);
    }

    public List<SecurityGuardOne> getAllSecurity() {
        return rp.findAll();
    }

    public SecurityGuardOne getSecurityById(Long id) {
        return rp.findById(id).orElse(null);
    }

    public void deleteSecurity(Long id) {
        rp.deleteById(id);
    }

    public SecurityGuardOne updateSecurity(Long userId, SecurityGuardOne updateSecurity) {
        SecurityGuardOne existingSecurity = rp.findById(userId)
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
