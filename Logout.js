import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Paper,
} from "@mui/material";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8092/api/logout", { withCredentials: true })
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "background.default",
        padding: 2,
      }}
    >
      <Paper
        sx={{
          padding: 4,
          textAlign: "center",
          borderRadius: 2,
          boxShadow: 5,
        }}
      >
        <Typography
          sx={{
            marginBottom: 2,
            fontSize: "2rem",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          You are now logged out.
        </Typography>
        <CircularProgress sx={{ marginBottom: 2 }} />
        <Typography
          sx={{
            marginBottom: 3,
            fontSize: "1.2rem",
            color: "text.secondary",
          }}
        >
          Redirecting to home page...
        </Typography>
        <Button
          sx={{
            marginTop: 3,
            backgroundColor: "#90caf9",
            color: "white",
            "&:hover": {
              backgroundColor: "#42a5f5",
            },
          }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Paper>
    </Box>
  );
}

export default Logout;
