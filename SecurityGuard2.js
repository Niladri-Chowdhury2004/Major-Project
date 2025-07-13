import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Img from "../ImageSlider/securityguard2.jpg"; // Ensure the image path is correct

export default function SecurityGuard2() {  // ✅ Fix component name
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/securityguard2-booking");  // ✅ Fix navigation path
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" height="150" src={Img} alt="Security Guard2" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Security Guard2
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            A security guard's job is to protect people, property, and assets .
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
