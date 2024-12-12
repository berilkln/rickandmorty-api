import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/home');
  };

  return (
    <div>
      <h1>Welcome to the Rick and Morty Universe !</h1>
      <p>Click to start exploring.</p>
      <button onClick={handleNavigateToHome}>Explore</button>
    </div>
  );
};

export default HomePage;
