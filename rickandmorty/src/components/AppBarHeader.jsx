import React from "react";
import {AppBar, Toolbar, Typography, Button, Box} from "@mui/material"
import { useNavigate } from "react-router-dom";

const AppBarHeader = ({ onClickCharacters, onClickLocation, onClickEpisode, }) => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/'); 
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.dark" }}>
      <Toolbar>
        <Typography
        variant="h6" 
        component="div" 
        onClick={handleNavigateHome}
        sx={{ flexGrow: 1, color: "secondary.main", cursor: "pointer", }}
        >
          Rick and Morty Universe
        </Typography>
        <Box>
        <Button color="secondary" onClick={onClickCharacters}>
          Character
        </Button>
        <Button color="secondary" onClick={onClickLocation}>
          Location
        </Button>
        <Button color="secondary" onClick={onClickEpisode}>
          Episode
        </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
