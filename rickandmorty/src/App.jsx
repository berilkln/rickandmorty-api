import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";

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
  
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <DataTable characters={characters} />;
};

export default App;
