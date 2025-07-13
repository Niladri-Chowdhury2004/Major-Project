package com.example.Learner.Service;

import com.example.Learner.Repo.LoginRepo;
import com.example.Learner.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {

    @Autowired
    private LoginRepo loginRepo;

    public Login addData(Login login) {
        return loginRepo.save(login);
    }

    public List<Login> getAllLogin() {
        return loginRepo.findAll();
    }

    public Login getLoginById(Long id) {
        return loginRepo.findById(id).orElse(null);
    }

    public void deleteLogin(Long id) {
        loginRepo.deleteById(id);
    }

    public Login updateLogin(Long userId, Login updatedLogin) {
        Login existingLogin = loginRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("Login not found with id " + userId));

        existingLogin.setEmail(updatedLogin.getEmail());
        existingLogin.setPassword(updatedLogin.getPassword());

        return loginRepo.save(existingLogin);
    }

    public Login authenticate(String email, String password) {
        return loginRepo.findByEmail(email)
                .filter(user -> user.getPassword().equals(password))
                .orElse(null);
    }
}