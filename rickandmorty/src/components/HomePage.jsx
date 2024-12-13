import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import rickAndMortyIcon from '../assets/rick-and-morty-icon.png';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/home');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'secondary.main',
      }}
    >
      <Box
        component="img"
        src={rickAndMortyIcon} 
        alt="Rick and Morty Icon"
        sx={{
          width: 400, 
          height: 'auto', 
          mb: 5,
        }}
      />
      
      <Typography variant="h3">Rick and Morty Universe</Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Click to start explore
      </Typography>
      
      <Button variant="contained" color="secondary" onClick={handleNavigateToHome}>
        Explore
      </Button>
    </Box>
  );
};

export default HomePage;
