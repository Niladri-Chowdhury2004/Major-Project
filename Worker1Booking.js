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
import { useNavigate } from "react-router-dom"; // ✅ MISSING IMPORT

export default function Worker1Booking() {
  const navigate = useNavigate(); // ✅ MISSING HOOK

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    location: "",
    dateOfBooking: "",
    timeSlot: "",
    duration: "",
    termsAgreed: false,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ ADDED STATE

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

    if (!formData.termsAgreed) { // ✅ FIXED PROPERTY NAME
      setError(true);
      setMessage("You must agree to the terms and conditions.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:8092/api/workerone/add", {
        fullName: formData.fullName,
        mobileNumber: Number(formData.mobileNumber),
        emailAddress: formData.emailAddress,
        location: formData.location,
        dateOfBooking: formData.dateOfBooking,
        timeSlot: formData.timeSlot,
        duration: formData.duration,
      });

      // Navigate to payment page
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
            Worker Booking
          </Typography>
          <Box
            component="img"
            src={require("../ImageSlider/worker3.jpg")}
            alt="Worker"
            sx={{
              width: 100,
              height: 100,
              mb: 2,
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              objectFit: "cover",
            }}
          />
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Enter your details to book a Worker. <br />
            <span style={{ fontWeight: "bold", color: "#d32f2f", fontSize: "1.1rem" }}>
              Every job deserves respect.
            </span>
          </Typography>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Your Name"
              name="fullName"
              variant="outlined"
              margin="normal"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              type="tel"
              variant="outlined"
              margin="normal"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              name="emailAddress"
              type="email"
              variant="outlined"
              margin="normal"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Location Address"
              name="location"
              variant="outlined"
              margin="normal"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Date of Booking"
              name="dateOfBooking"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              margin="normal"
              value={formData.dateOfBooking}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Time Slot"
              name="timeSlot"
              select
              variant="outlined"
              margin="normal"
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
              name="duration"
              select
              variant="outlined"
              margin="normal"
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
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
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
              {loading ? "Booking..." : "Book Now"}
            </Button>
          </form>

          {message && (
            <Alert severity={error ? "error" : "success"} sx={{ mt: 3 }}>
              {message}
            </Alert>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
