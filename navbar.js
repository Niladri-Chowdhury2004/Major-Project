import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "Customer Info", "Add Location", "Signup", "Login", "About Us"];


const settings = ["Profile", "Admin","Logout"];
const jobOptions = ["Worker Booking List", "Security guard Booking List"];
const locationOptions = ["KolKata", "Delhi"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElJobs, setAnchorElJobs] = useState(null);
  const [anchorElLocations, setAnchorElLocations] = useState(null);

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            THINKFORCES
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Box key={page} sx={{ mx: 1 }}>
    {page === "Customer Info" ? (
  <>
    <Button
      onClick={(e) => setAnchorElJobs(e.currentTarget)}
      sx={{ color: "white" }}
    >
      {page}
    </Button>
    <Menu
      anchorEl={anchorElJobs}
      open={Boolean(anchorElJobs)}
      onClose={() => setAnchorElJobs(null)}
    >
      {jobOptions.map((job) => (
  <MenuItem
    key={job}
    onClick={() => {
      if (job === "Worker Booking List") navigate("/worker");
      else if (job === "Security guard Booking List") navigate("/securityguard");
      setAnchorElJobs(null);
    }}
  >
    {job}
  </MenuItem>
))}

    </Menu>
  </>
) :
 page === "Add Location" ? (
                  <>
                    <Button
                      onClick={(e) => setAnchorElLocations(e.currentTarget)}
                      sx={{ color: "white" }}
                    >
                      {page}
                    </Button>
                    <Menu
                      anchorEl={anchorElLocations}
                      open={Boolean(anchorElLocations)}
                      onClose={() => setAnchorElLocations(null)}
                    >
                      {locationOptions.map((location) => (
                        <MenuItem
                          key={location}
                          onClick={() => {
                            if (location === "KolKata") navigate("/kolkata-map");
                            if (location === "Delhi") navigate("/delhi-map");
                            setAnchorElLocations(null);
                          }}
                        >
                          {location}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Button
                    onClick={() => {
                      const route =
                        page === "Home"
                          ? "/"
                          : page === "Signup"
                          ? "/signup"
                          : page === "Login"
                          ? "/login"
                          : page === "About Us"
                          ? "/about"
                          : "/";
                      navigate(route);
                    }}
                    sx={{ color: "white" }}
                  >
                    {page}
                  </Button>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    setAnchorElUser(null);
                    if (setting === "Profile") navigate("/profile");
else if (setting === "Admin") navigate("/admin"); // ✅ Add this line
else if (setting === "Logout") navigate("/logout");

                  }}
                >
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;