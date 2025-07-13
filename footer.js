import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{
      backgroundColor: "#1976d2", // MUI primary blue
      color: "white",
      textAlign: "center",
      py: 2,
      position: "fixed",
      bottom: 0,
      width: "100%"
    }}>
      <Container>
        <Typography variant="body2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
