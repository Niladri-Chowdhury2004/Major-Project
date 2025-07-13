package com.example.Learner.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.SecurityRepo;
import com.example.Learner.model.Security;

@Service
public class SecurityService {

    @Autowired
    SecurityRepo sr;
   

    public Security addData(Security security) {
        return sr.save(security);
    }
    public List<Security> getAllSecurity() {
        return sr.findAll();
    }

    // ✅ Get Security by ID
    public Security getSecurityById(Long id) {
        return sr.findById(id).orElse(null);
    }

    public void deleteSecurity(Long id) {
        sr.deleteById(id);
    }
    public Security UpdateSecurity(Long userId, Security updateSecurity) {
    	Security existingSecurity=sr.findById(userId).orElseThrow(()-> new RuntimeException("Security not found with id" +userId));
    			
		existingSecurity.setFirstName(updateSecurity.getFirstName());
		existingSecurity.setLastName(updateSecurity.getLastName());
		existingSecurity.setPhNo(updateSecurity.getPhNo());
		existingSecurity.setUserId(updateSecurity.getUserId());
		return sr.save(existingSecurity);
	}
}
