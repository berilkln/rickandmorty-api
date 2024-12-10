import React, { useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, Button } from "@mui/material";

const DataTable = ({ characters }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchWord, setSearchWord] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  

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

  const displayedCharacters = filteredCharacters.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <TextField
        label="Search"
        variant="outlined"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={CharacterSearch}>
        Search
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Character Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Species</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedCharacters.map((character) => (
              <TableRow key={character.id}>
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
    </Paper>
  );
};

export default DataTable;
