import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";
import AppBarHeader from "./components/AppBarHeader";
import LocationDataTable from "./components/LocationDataTable";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTable, setActiveTable] = useState("");

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


  const getLocations = async () => {
    try {
      setLoading(true);
      let allLocations = [];
      let page = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/location?page=${page}`
        );
        allLocations = [...allLocations, ...response.data.results];
        hasNextPage = response.data.info.next !== null;
        page += 1;
      }

      setLocations(allLocations);

    } catch (err) {
      setError("API verisi alınırken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getCharacters();
    getLocations();
  }, []);
  
  const handleClickLocation = () => {
    setActiveTable("locations");
  };

  const handleClickCharacters = () => {
    setActiveTable("characters");
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
      {activeTable === "characters" && <DataTable characters={characters} />}
      {activeTable === "locations" && <LocationDataTable locations={locations} />}
    </div>
  );
};

export default App;
