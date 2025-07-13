import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box, Avatar, Button, Grid, TextField, Typography, Card, CardContent, Alert
} from "@mui/material";

const defaultData = {
  userId: null,  // Initially null; will fetch real data
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  phoneNumber: "",
};

export default function Profile() {
  const [formData, setFormData] = useState(defaultData);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        // Replace 1 with the actual userId you want to load
        const response = await axios.get("http://localhost:8092/api/profile/1");

        const data = {
          userId: response.data.userId || null,
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          email: response.data.email || "",
          role: response.data.role || "",
          phoneNumber: response.data.phoneNumber ? response.data.phoneNumber.toString() : "",
        };

        setFormData(data);
        localStorage.setItem("profileData", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to load profile", error);
        setMessage("Failed to load profile data.");
        setError(true);
      }
    }
    fetchProfile();
  }, []);

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSave = async () => {
    if (!formData.userId) {
      setError(true);
      setMessage("Profile ID missing. Cannot update.");
      return;
    }

    try {
      setMessage("");
      setError(false);

      const payload = {
        userId: formData.userId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: formData.role,
        phoneNumber: formData.phoneNumber ? Number(formData.phoneNumber) : null,
      };

      const response = await axios.put(
        `http://localhost:8092/api/profile/${formData.userId}`,
        payload
      );

      const data = {
        userId: response.data.userId || formData.userId,
        firstName: response.data.firstName || "",
        lastName: response.data.lastName || "",
        email: response.data.email || "",
        role: response.data.role || "",
        phoneNumber: response.data.phoneNumber ? response.data.phoneNumber.toString() : "",
      };

      localStorage.setItem("profileData", JSON.stringify(data));
      setFormData(data);
      setMessage("Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      setError(true);
      setMessage(err.response?.data?.message || "Failed to update profile. Try again.");
    }
  };

  const handleCancel = () => {
    const savedData = localStorage.getItem("profileData");
    setFormData(savedData ? JSON.parse(savedData) : defaultData);
    setMessage("");
    setError(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: 500, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
            <Avatar src="/imageSlider/userprofile.jpg" sx={{ width: 80, height: 80, mb: 1 }} />
            <Typography variant="h5">Edit Profile</Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                value={formData.firstName}
                onChange={handleChange("firstName")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                value={formData.lastName}
                onChange={handleChange("lastName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Role"
                fullWidth
                value={formData.role}
                onChange={handleChange("role")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                type="tel"
                fullWidth
                value={formData.phoneNumber}
                onChange={handleChange("phoneNumber")}
              />
            </Grid>
          </Grid>

          {message && (
            <Alert severity={error ? "error" : "success"} sx={{ mt: 2 }}>
              {message}
            </Alert>
          )}

          <Box sx={{ mt: 3, textAlign: "right" }}>
            <Button onClick={handleCancel} variant="outlined" sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
