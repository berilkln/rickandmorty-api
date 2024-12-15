import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, Button, Box} from "@mui/material";

const LocationDataTable = ({ locations }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchWord, setSearchWord] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [orderName, setOrderName] = useState("asc");
  const [orderType, setOrderType] = useState("asc");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const LocationSearch = () => {
    if (searchWord.trim() === "") {
      setFilteredLocations(locations);
    } else {
      const filtered = locations.filter((location) => {
        return (
          location.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          location.type.toLowerCase().includes(searchWord.toLowerCase()) ||
          location.dimension.toLowerCase().includes(searchWord.toLowerCase())
        );
      });
      setFilteredLocations(filtered);
    }
    setPage(0);
  };

  const SortByName = () => {
    const sorted = [...filteredLocations].sort((a, b) => {
      if (orderName === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredLocations(sorted);
    setOrderName(orderName === "asc" ? "desc" : "asc");
  };

  const SortByType = () => {
    const sorted = [...filteredLocations].sort((a, b) => {
      if (orderType === "asc") {
        return a.type.localeCompare(b.type);
      } else {
        return b.type.localeCompare(a.type);
      }
    });
    setFilteredLocations(sorted);
    setOrderType(orderType === "asc" ? "desc" : "asc");
  };

  const displayedLocations = filteredLocations.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <Box sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}>
        <TextField
          label="Search Location"
          variant="outlined"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="warning" onClick={LocationSearch}>
          Search
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={SortByName} style={{ cursor: "pointer" }}>
                Location Name {orderName === "asc" ? "↑" : "↓"}
              </TableCell>
              <TableCell onClick={SortByType} style={{ cursor: "pointer" }}>
                Type {orderType === "asc" ? "↑" : "↓"}
              </TableCell>
              <TableCell>Dimension</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedLocations.map((location) => (
              <TableRow 
              key={location.id}
              sx={{
                '&:hover': {
                  backgroundColor: 'primary.light', 
                },
              }}
              >
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.type}</TableCell>
                <TableCell>{location.dimension}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredLocations.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default LocationDataTable;
