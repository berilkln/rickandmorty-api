import React, { useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, Button, Box, Checkbox, ListItemText, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
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
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState([]);



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const applyFilters = () => {
    let filtered = characters;

    if (selectedStatus.length > 0) {
      filtered = filtered.filter((character) =>
        selectedStatus.includes(character.status)
      );
    }
    
    if (selectedGender.length > 0) {
      filtered = filtered.filter((character) =>
        selectedGender.includes(character.gender)
      );
    }
    
    if (selectedSpecies.length > 0) {
      filtered = filtered.filter((character) =>
        selectedSpecies.includes(character.species)
      );
    }

    if (searchWord.trim() !== "") {
      filtered = filtered.filter((character) => {
        return (
          character.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.status.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.species.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.gender.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.origin.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          character.location.name.toLowerCase().includes(searchWord.toLowerCase())
        );
      });
    }

    setFilteredCharacters(filtered);
    setPage(0);
  };


  const handleSelectChange = (setter) => (event) => {
    const {
      target: { value },
    } = event;
    setter(typeof value === "string" ? value.split(",") : value);
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
        <Button variant="contained" onClick={applyFilters}>
          Apply Filter
        </Button>
      </Box>
      <Box sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}>
        <FormControl sx={{ minWidth: 400, marginRight: 2 }}>
          <InputLabel>Status</InputLabel>
          <Select
          multiple
          value={selectedStatus}
          onChange={handleSelectChange(setSelectedStatus)}
          renderValue={(selected) => selected.join(", ")}
          fullWidth
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="Alive">
            <Checkbox checked={selectedStatus.indexOf("Alive") > -1} />
            <ListItemText primary="Alive" />
          </MenuItem>
          <MenuItem value="Dead">
            <Checkbox checked={selectedStatus.indexOf("Dead") > -1} />
            <ListItemText primary="Dead" />
          </MenuItem>
          <MenuItem value="Unknown">
            <Checkbox checked={selectedStatus.indexOf("unknown") > -1} />
            <ListItemText primary="unknown" />
          </MenuItem>
        </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 400, marginRight: 2 }}>
          <InputLabel>Gender</InputLabel>
          <Select
          multiple
          value={selectedGender}
          onChange={handleSelectChange(setSelectedGender)}
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value="Male">
            <Checkbox checked={selectedGender.indexOf("Male") > -1} />
            <ListItemText primary="Male" />
          </MenuItem>
          <MenuItem value="Female">
            <Checkbox checked={selectedGender.indexOf("Female") > -1} />
            <ListItemText primary="Female" />
          </MenuItem>
          <MenuItem value="Unknown">
            <Checkbox checked={selectedGender.indexOf("Unknown") > -1} />
            <ListItemText primary="Unknown" />
          </MenuItem>
        </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 400 }}>
          <InputLabel>Species</InputLabel>
          <Select
          multiple
          value={selectedSpecies}
          onChange={handleSelectChange(setSelectedSpecies)}
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value="Human">
            <Checkbox checked={selectedSpecies.indexOf("Human") > -1} />
            <ListItemText primary="Human" />
          </MenuItem>
          <MenuItem value="Alien">
            <Checkbox checked={selectedSpecies.indexOf("Alien") > -1} />
            <ListItemText primary="Alien" />
          </MenuItem>
          <MenuItem value="Unknown">
            <Checkbox checked={selectedSpecies.indexOf("Unknown") > -1} />
            <ListItemText primary="Unknown" />
          </MenuItem>
        </Select>
        </FormControl>
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
