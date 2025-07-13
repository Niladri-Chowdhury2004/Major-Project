package com.example.Learner.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Security {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long UserId; // Changed to camelCase for consistency
    public String FirstName; // Changed to camelCase
    public String LastName; // Changed to camelCase
    public Long PhNo;

    public Security() {
    }

    public Security(Long userId, String firstName, String lastName, Long phNo) {
        this.UserId = userId;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.PhNo = phNo;
    }

	public Long getUserId() {
		return UserId;
	}

	public void setUserId(Long userId) {
		UserId = userId;
	}

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public Long getPhNo() {
		return PhNo;
	}

	public void setPhNo(Long phNo) {
		PhNo = phNo;
	}

    
}
