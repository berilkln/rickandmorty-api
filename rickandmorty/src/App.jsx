import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";
import AppBarHeader from "./components/AppBarHeader";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCharacters = async () => {
    try {
      setLoading(true);
      let allCharacters = [];
      let page = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        allCharacters = [...allCharacters, ...response.data.results];
        hasNextPage = response.data.info.next !== null;
        page += 1;
      }

      setCharacters(allCharacters);

    } catch (err) {
      setError("API verisi alınırken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

    
  useEffect(() => {
    getCharacters();
  }, []);
  
  const handleClickLocation = () => {
    alert("Location button clicked!");
  };

  const handleClickCharacters = () => {
    alert("Character button clicked!");
  };

  const handleClickEpisode = () => {
    alert("Episode button clicked!");
  };

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <AppBarHeader 
        onClickCharacters = {handleClickCharacters}
        onClickLocation = {handleClickLocation}
        onClickEpisode = {handleClickEpisode}
      />
      <DataTable characters={characters} />
    </div>
  );
};

export default App;
