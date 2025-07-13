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

import com.example.Learner.Service.SecurityService;
import com.example.Learner.model.Security;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/security")
public class SecurityController {

	@Autowired
   	SecurityService ss;

	@PostMapping("/add")
    public Security addSecurity(@RequestBody Security security) {
        return ss.addData(security);
    }
    
    // GET - Get all Securities
    @GetMapping
    public List<Security> getAllSecurity() {
        return ss.getAllSecurity();
    }

    // ✅ GET - Get Security by ID
    @GetMapping("/{id}")
    public Security getSecurityById(@PathVariable("id") Long id) {
        return ss.getSecurityById(id);
    }

    // DELETE - Delete Security by ID
    @DeleteMapping("/{id}")
    public void deleteSecurity(@PathVariable("id") Long id) {
        ss.deleteSecurity(id);
    }
@PutMapping(("/{id}"))
public List<Security>UpdateSecurity(@PathVariable Long id,	@RequestBody Security UpdateSecurity)
{
	Security saveSecurity=ss.UpdateSecurity(id,UpdateSecurity);
	return null;
}
}
