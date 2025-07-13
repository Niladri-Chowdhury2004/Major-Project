import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Img from "../ImageSlider/Worker2.jpg"; // Ensure the file exists

export default function Worker2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/worker2-booking");
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" height="150" src={Img} alt="Worker2" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Worker2
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            A worker's job involves performing specific tasks based on their skills.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
