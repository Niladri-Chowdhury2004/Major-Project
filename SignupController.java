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

import com.example.Learner.Service.SignupService;
import com.example.Learner.model.Signup;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/signup")
public class SignupController {

	private final SignupService ss;
	@Autowired
	public SignupController(SignupService ss)
	{
		this.ss=ss;
	}
	@PostMapping("/add")
	public Signup addSignup(@RequestBody Signup signup)
	{
		return ss.addData(signup);
	}
	@GetMapping
	public List<Signup> getAllSignup()
	{
		return ss.getAllSignup();
	}
	// ✅ GET - Get all by ID
	@GetMapping("/{id}")
	public Signup getAllSignupById(@PathVariable("id") Long id)
	{
		return ss.getAllSignupById(id);
	}
	//Delete registers by Id
	@DeleteMapping("/{id}")
	public void deleteSecurity(@PathVariable("id") Long id)
	{
		ss.deleteSecurity(id);
	}
	//put the registers
	
	@PutMapping(("/{id}"))
	public List <Signup> UpdateSignup(@PathVariable Long id,@RequestBody Signup UpdateSignup)
	{
		Signup saveSignup=ss.UpdateSignup(id,UpdateSignup);
		return null;
	}
	
}
