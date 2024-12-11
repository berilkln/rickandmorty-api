// src/components/CharacterDetails.jsx
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import './CharacterDetails.css';

const CharacterDetails = ({ character }) => {
  if (!character) return null;

  return (
    <Card className='character-card'>
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        sx={{ width: 300, height: 300, objectFit: 'cover' }}
      />
      <CardContent className='character-info'>
        <Typography variant="h4">{character.name}</Typography>
        <Typography variant="body1" ><b>Status:</b> {character.status}</Typography>
        <Typography variant="body1" ><b>Species:</b> {character.species}</Typography>
        <Typography variant="body1" ><b>Gender:</b> {character.gender}</Typography>
        <Typography variant="body1" ><b>Origin:</b> {character.origin.name}</Typography>
        <Typography variant="body1" ><b>Last known location:</b> {character.location.name}</Typography>
        <Typography variant="body1" ><b>Type:</b> {character.type || 'N/A'}</Typography>
        <Typography variant="body1" ><b>Episode:</b> {character.episode.length}</Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterDetails;
