import React, { useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, Button, Box } from "@mui/material";
import CharacterDetails from "./CharacterDetails";

const DataTable = ({ characters }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchWord, setSearchWord] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [orderName, setOrderName] = useState("asc");
  const [orderOrigin, setOrderOrigin] = useState("asc");
  const [orderLocation, setOrderLocation] = useState("asc");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const CharacterSearch = () => {
    if (searchWord.trim() === "") {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter((character) => {
        return (
          character.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.status.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.species.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.gender.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.origin.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.location.name.toLowerCase().includes(searchWord.toLowerCase())
        );
      });
      setFilteredCharacters(filtered);
    }
    setPage(0);
  };

  const SortByName = () => {
    const sorted = [...filteredCharacters].sort((a,b) => {
      if (orderName === "asc"){
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredCharacters(sorted);
    setOrderName(orderName === "asc" ? "desc" : "asc");
  };

  const SortByOrigin = () => {
    const sorted = [...filteredCharacters].sort((a,b) => {
      if (orderOrigin === "asc"){
        return a.origin.name.localeCompare(b.origin.name);
      } else {
        return b.origin.name.localeCompare(a.origin.name);
      }
    });
    setFilteredCharacters(sorted);
    setOrderOrigin(orderOrigin === "asc" ? "desc" : "asc");
  };

  const SortByLocation = () => {
    const sorted = [...filteredCharacters].sort((a, b) => {
      if (orderLocation === "asc") {
        return a.location.name.localeCompare(b.location.name); 
      } else {
        return b.location.name.localeCompare(a.location.name); 
      }
    });
    setFilteredCharacters(sorted);
    setOrderLocation(orderLocation === "asc" ? "desc" : "asc"); 
  };

  const handleRowClick = (character) => {
    setSelectedCharacter(character);
  };

  const displayedCharacters = filteredCharacters.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <Box sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}>
        <TextField
          label="Search Character"
          variant="outlined"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={CharacterSearch}>
          Search
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={SortByName} style={{ cursor: "pointer" }}> Character Name {orderName === "asc" ? "↑" : "↓"}
              </TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Species</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell onClick={SortByOrigin} style={{ cursor: "pointer" }}> Origin {orderOrigin === "asc" ? "↑" : "↓"}
              </TableCell>
              <TableCell onClick={SortByLocation} style={{ cursor: "pointer" }}> Last Known Location {orderLocation === "asc" ? "↑" : "↓"}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedCharacters.map((character) => (
              <TableRow 
              key={character.id} 
              onClick={() => handleRowClick(character)} 
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'primary.light', 
                },
              }}
              >
                <TableCell>{character.name}</TableCell>
                <TableCell>{character.status}</TableCell>
                <TableCell>{character.species}</TableCell>
                <TableCell>{character.gender}</TableCell>
                <TableCell>{character.origin.name}</TableCell>
                <TableCell>{character.location.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredCharacters.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <CharacterDetails character={selectedCharacter} />
    </Paper>
  );
};

export default DataTable;
