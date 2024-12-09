import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        setCharacters(response.data.results);
      } catch (err) {
        setError("API verisi alınırken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <DataTable characters={characters} />;
};

export default App;
