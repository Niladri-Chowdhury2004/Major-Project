package com.example.Learner.model;

import java.sql.Date;
import jakarta.persistence.*;

@Entity
public class WorkerTwo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    private String fullName;
    private Long mobileNumber;
    private String emailAddress;
    private String location;
    private Date dateOfBooking;
    private String timeSlot;
    private String duration;

    public WorkerTwo() {}

    public WorkerTwo(Long userId, String fullName, Long mobileNumber, String emailAddress,
                     String location, Date dateOfBooking, String timeSlot, String duration) {
        this.userId = userId;
        this.fullName = fullName;
        this.mobileNumber = mobileNumber;
        this.emailAddress = emailAddress;
        this.location = location;
        this.dateOfBooking = dateOfBooking;
        this.timeSlot = timeSlot;
        this.duration = duration;
    }

    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Long getMobileNumber() {
        return mobileNumber;
    }
    public void setMobileNumber(Long mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDateOfBooking() {
        return dateOfBooking;
    }
    public void setDateOfBooking(Date dateOfBooking) {
        this.dateOfBooking = dateOfBooking;
    }

    public String getTimeSlot() {
        return timeSlot;
    }
    public void setTimeSlot(String timeSlot) {
        this.timeSlot = timeSlot;
    }

    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
}