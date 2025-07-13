import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import Img from "../ImageSlider/securityguard1.jpeg"; // ✅ Fix Image Path

export default function SecurityGuard1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/securityguard1-booking"); // ✅ Navigate to the booking page
  };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleClick} style={{ cursor: "pointer" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" src={Img} alt="Security Guard" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Security Guard 1
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            A security guard’s job is to ensure safety by monitoring premises .
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
