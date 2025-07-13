package com.example.Learner.Controller;

import com.example.Learner.Service.LoginService;
import com.example.Learner.model.Login;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    // Session-based login
    @PostMapping("/session")
    public ResponseEntity<String> loginWithSession(@RequestBody Login login, HttpSession session) {
        Login authenticatedUser = loginService.authenticate(login.getEmail(), login.getPassword());
        if (authenticatedUser != null) {
            session.setAttribute("user", authenticatedUser);
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    // Logout
    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logged out successfully");
    }

    // Welcome (session protected)
    @GetMapping("/welcome")
    public ResponseEntity<String> welcome(HttpSession session) {
        Login user = (Login) session.getAttribute("user");
        if (user != null) {
            return ResponseEntity.ok("Welcome, " + user.getEmail());
        } else {
            return ResponseEntity.status(401).body("Please log in first.");
        }
    }

    // CRUD Operations

    @PostMapping("/add")
    public Login addLogin(@RequestBody Login login) {
        return loginService.addData(login);
    }

    @GetMapping
    public List<Login> getAllLogin() {
        return loginService.getAllLogin();
    }

    @GetMapping("/{id}")
    public Login getLoginById(@PathVariable Long id) {
        return loginService.getLoginById(id);
    }

    @PutMapping("/{id}")
    public Login updateLogin(@PathVariable Long id, @RequestBody Login updatedLogin) {
        return loginService.updateLogin(id, updatedLogin);
    }

    @DeleteMapping("/{id}")
    public void deleteLogin(@PathVariable Long id) {
        loginService.deleteLogin(id);
    }
}