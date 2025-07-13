import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WorkerBookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    location: "",
    dateOfBooking: "",
    timeSlot: "",
    duration: "",
    agreeTerms: false,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  setError(false);

  if (!formData.agreeTerms) {
    setError(true);
    setMessage("You must agree to the terms and conditions.");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:8092/api/workertwo/add",
      {
        fullName: formData.fullName,
        mobileNumber: Number(formData.mobileNumber),
        emailAddress: formData.emailAddress,
        location: formData.location,
        dateOfBooking: formData.dateOfBooking,
        timeSlot: formData.timeSlot,
        duration: formData.duration,
      }
    );

    // Redirect to payment page and pass data (e.g., amount and formData)
    navigate("/payment", {
      state: {
        formData: {
          ...formData,
          amount: 500, // you can make it dynamic if needed
        },
      },
    });
  } catch (err) {
    setError(true);
    setMessage(
      err.response?.data?.message || "Booking failed. Please try again."
    );
  }
};


  return (
    <Container maxWidth="sm" sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 450,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Worker Booking
          </Typography>
          <Box
            component="img"
            src="/securityguard1-icon.png"
            alt="Security Guard"
            sx={{ width: 100, height: 100, mb: 2, borderRadius: "50%", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
          />
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Enter your details to book a Worker.
            <br />
            <span style={{ fontWeight: "bold", color: "#d32f2f", fontSize: "1.1rem" }}>
              Every job deserves respect.
            </span>
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Mobile Number"
              type="tel"
              variant="outlined"
              margin="normal"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Location Address"
              variant="outlined"
              margin="normal"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Date of Booking"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              margin="normal"
              name="dateOfBooking"
              value={formData.dateOfBooking}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Time Slot"
              select
              variant="outlined"
              margin="normal"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
            >
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Night">Night</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Duration"
              select
              variant="outlined"
              margin="normal"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            >
              <MenuItem value="One-time">One-time</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </TextField>

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  name="agreeTerms"
                  required
                />
              }
              label="I agree to the terms and conditions"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Book Now
            </Button>

            {message && (
              <Alert severity={error ? "error" : "success"} sx={{ mt: 3 }}>
                {message}
              </Alert>
            )}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
