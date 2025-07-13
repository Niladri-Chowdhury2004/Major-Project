import React from "react";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";

const guard = {
  name: "Security Guard 4",
  img: "https://via.placeholder.com/100",
};

export default function Securityguard4Booking() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${guard.name}!`);
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          p: 3,
          width: "100%",
          maxWidth: 450,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            {guard.name} Booking
          </Typography>
          <Box
            component="img"
            src={guard.img}
            alt={guard.name}
            sx={{
              width: 100,
              height: 100,
              mb: 2,
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          />
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Enter your details to book {guard.name}.
            <br />
            <span style={{ fontWeight: "bold", color: "#d32f2f", fontSize: "1.1rem" }}>
              Every job deserves respect.
            </span>
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Your Name" variant="outlined" margin="normal" required />
            <TextField fullWidth label="Mobile Number" type="tel" variant="outlined" margin="normal" required />
            <TextField fullWidth label="Email Address" type="email" variant="outlined" margin="normal" />
            <TextField fullWidth label="Location Address" variant="outlined" margin="normal" required />
            <TextField
              fullWidth
              label="Date of Booking"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              margin="normal"
              required
            />
            <TextField fullWidth label="Time Slot" select variant="outlined" margin="normal" required>
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Night">Night</MenuItem>
            </TextField>
            <TextField fullWidth label="Duration" select variant="outlined" margin="normal" required>
              <MenuItem value="One-time">One-time</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </TextField>
            <FormControlLabel control={<Checkbox required />} label="I agree to the terms and conditions" />
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
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
