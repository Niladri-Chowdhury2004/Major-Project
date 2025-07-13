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

export default function SecurityGuard1Booking() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    locationAddress: "",
    bookingDate: "",
    timeSlot: "",
    duration: "",
    agreedTerms: false,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
  setLoading(true);

  if (!formData.agreedTerms) {
    setError(true);
    setMessage("You must agree to the terms and conditions.");
    setLoading(false);
    return;
  }

  try {
    await axios.post("http://localhost:8092/api/securityguardone/add", {
      fullName: formData.fullName,
      mobileNumber: Number(formData.mobileNumber),
      emailAddress: formData.email, // corrected
      location: formData.locationAddress, // corrected
      dateOfBooking: formData.bookingDate, // corrected
      timeSlot: formData.timeSlot,
      duration: formData.duration,
    });

    // After successful booking, navigate to payment page
    navigate("/payment", {
      state: {
        formData: {
          ...formData,
          amount: 500,
        },
      },
    });
  } catch (err) {
    setError(true);
    setMessage(err.response?.data?.message || "Booking failed. Please try again.");
  } finally {
    setLoading(false);
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
            Security Guard Booking
          </Typography>
          <Box
            component="img"
            src="/securityguard1-icon.png"
            alt="Security Guard"
            sx={{ width: 100, height: 100, mb: 2, borderRadius: "50%", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
          />
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Enter your details to book a security guard.
            <br />
            <span style={{ fontWeight: "bold", color: "#d32f2f", fontSize: "1.1rem" }}>
              Every job deserves respect.
            </span>
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Mobile Number"
              type="tel"
              variant="outlined"
              margin="normal"
              required
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Location Address"
              variant="outlined"
              margin="normal"
              required
              name="locationAddress"
              value={formData.locationAddress}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Date of Booking"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              margin="normal"
              required
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Time Slot"
              select
              variant="outlined"
              margin="normal"
              required
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
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
              required
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            >
              <MenuItem value="One-time">One-time</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </TextField>

            <FormControlLabel
              control={
                <Checkbox
                  required
                  name="agreedTerms"
                  checked={formData.agreedTerms}
                  onChange={handleChange}
                />
              }
              label="I agree to the terms and conditions"
            />
            <br />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {loading ? "Booking..." : "Book Now"}
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
