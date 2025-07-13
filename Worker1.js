import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Img from "../ImageSlider/servant1.jpeg";

export default function Worker1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/worker1-booking");
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" height="150" src={Img} alt="Worker1" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Worker1
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            A worker is a person who performs labor or tasks, typically in exchange for wages or salary.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}