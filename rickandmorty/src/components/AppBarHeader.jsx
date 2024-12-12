import React from "react";
import {AppBar, Toolbar, Typography, Button, Box} from "@mui/material"

const AppBarHeader = ({ onClickCharacters, onClickLocation, onClickEpisode, }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rick and Morty Universe
        </Typography>
        <Box>
        <Button color="inherit" onClick={onClickCharacters}>
          Character
        </Button>
        <Button color="inherit" onClick={onClickLocation}>
          Location
        </Button>
        <Button color="inherit" onClick={onClickEpisode}>
          Episode
        </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
