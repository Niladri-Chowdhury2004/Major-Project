package com.example.Learner.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Learner.Service.SecurityGuardTwoService;
import com.example.Learner.model.SecurityGuardTwo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/securityguardtwo")
public class SecurityGuardTwoController {

    private final SecurityGuardTwoService ss;

    @Autowired
    public SecurityGuardTwoController(SecurityGuardTwoService ss) {
        this.ss = ss;
    }

    @PostMapping("/add")
    public SecurityGuardTwo addSecurity(@RequestBody SecurityGuardTwo securityguardtwo) {
        return ss.addData(securityguardtwo);
    }

    @GetMapping
    public List<SecurityGuardTwo> getAllSecurity() {
        return ss.getAllSecurity();
    }

    @GetMapping("/{id}")
    public SecurityGuardTwo getSecurityById(@PathVariable("id") Long id) {
        return ss.getSecurityById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteSecurity(@PathVariable("id") Long id) {
        ss.deleteSecurity(id);
    }

    @PutMapping("/{id}")
    public SecurityGuardTwo updateSecurity(@PathVariable Long id, @RequestBody SecurityGuardTwo updateSecurity) {
        return ss.updateSecurity(id, updateSecurity);
    }
}
