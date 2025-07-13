package com.example.Learner.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.Learner.Service.SecurityGuardOneService;
import com.example.Learner.model.SecurityGuardOne;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/securityguardone")
public class SecurityGuardOneController {

    private final SecurityGuardOneService ss;

    @Autowired
    public SecurityGuardOneController(SecurityGuardOneService ss) {
        this.ss = ss;
    }

    @PostMapping("/add")
    public SecurityGuardOne addSecurity(@RequestBody SecurityGuardOne securityguardone) {
        return ss.addData(securityguardone);
    }

    @GetMapping
    public List<SecurityGuardOne> getAllSecurity() {
        return ss.getAllSecurity();
    }

    @GetMapping("/{id}")
    public SecurityGuardOne getSecurityById(@PathVariable("id") Long id) {
        return ss.getSecurityById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteSecurity(@PathVariable("id") Long id) {
        ss.deleteSecurity(id);
    }

    @PutMapping("/{id}")
    public SecurityGuardOne updateSecurity(@PathVariable Long id, @RequestBody SecurityGuardOne updateSecurity) {
        return ss.updateSecurity(id, updateSecurity);
    }
}
