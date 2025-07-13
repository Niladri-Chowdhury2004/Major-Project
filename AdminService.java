package com.example.Learner.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.AdminRepo;
import com.example.Learner.model.Admin;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepo;

    public Admin addAdmin(Admin admin) {
        return adminRepo.save(admin);
    }

    public List<Admin> getAllAdmins() {
        return adminRepo.findAll();
    }

    public Admin getAdminById(Long id) {
        return adminRepo.findById(id).orElse(null); // Controller handles null case
    }

    public void deleteAdmin(Long id) {
        adminRepo.deleteById(id);
    }

    public Admin updateAdmin(Long id, Admin updatedAdmin) {
        Admin existingAdmin = adminRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Admin not found with ID: " + id));

        existingAdmin.setFullName(updatedAdmin.getFullName());
        existingAdmin.setEmail(updatedAdmin.getEmail());
        existingAdmin.setPhNo(updatedAdmin.getPhNo());
        existingAdmin.setRole(updatedAdmin.getRole());

        return adminRepo.save(existingAdmin);
    }
}
