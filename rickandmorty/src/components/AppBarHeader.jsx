import React from "react";
import {AppBar, Toolbar, Typography, Button, Box} from "@mui/material"

const AppBarHeader = ({ onClickCharacters, onClickLocation, onClickEpisode, }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.dark" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "secondary.main" }}>
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
