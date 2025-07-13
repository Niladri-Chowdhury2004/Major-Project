package com.example.Learner.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.Learner.Service.ProfileService;
import com.example.Learner.model.Profile;

@CrossOrigin(origins = "http://localhost:3000")  // Allow React frontend at this origin
@RestController
@RequestMapping("api/profile")
public class ProfileController {

    private final ProfileService pf;

    @Autowired
    public ProfileController(ProfileService pf) {
        this.pf = pf;
    }

    @PostMapping("/add")
    public Profile addProfile(@RequestBody Profile profile) {
        return pf.addData(profile);
    }

    @GetMapping
    public List<Profile> getAllProfile() {
        return pf.getAllProfile();
    }

    @GetMapping("/{id}")
    public Profile getProfileById(@PathVariable("id") Long id) {
        return pf.getProfileById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProfile(@PathVariable("id") Long id) {
        pf.deleteprofile(id);
    }

    @PutMapping("/{id}")
    public Profile updateProfile(@PathVariable Long id, @RequestBody Profile updateProfile) {
        return pf.UpadateProfile(id, updateProfile);
    }
}
