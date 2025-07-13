package com.example.Learner.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Learner.Repo.SignupRepo;
import com.example.Learner.model.Signup;

@Service
public class SignupService {
	@Autowired
	SignupRepo  sr;
	
	public Signup addData(Signup signup)
	{
		return sr.save(signup);
	}
	// Get all  registers
	public List <Signup> getAllSignup()
	{
		return sr.findAll();
	}
	//Get the Specific register By Id
	public Signup getAllSignupById(Long id)
	{
		return sr.findById(id).orElse(null);
	}
	public void deleteSecurity(Long id)
	{
		sr.deleteById(id);
	}
	
	//put method the registers
	
	public Signup UpdateSignup(Long userId,Signup updateSignup)
	{
		Signup existingSignup=sr.findById(userId).orElseThrow(()-> new RuntimeException("Records not found with id" +userId));
		existingSignup.setFirstName(updateSignup.getFirstName());
		existingSignup.setLastName(updateSignup.getLastName());
		existingSignup.setEmail(updateSignup.getEmail());
		existingSignup.setJobType(updateSignup.getJobType());
		existingSignup.setJobLocation(updateSignup.getJobLocation());
		existingSignup.setEmploymentType(updateSignup.getEmploymentType());
		existingSignup.setPassword(updateSignup.getPassword());
		existingSignup.setConfirmPassword(updateSignup.getConfirmPassword());
		return sr.save(existingSignup);
	}
}
