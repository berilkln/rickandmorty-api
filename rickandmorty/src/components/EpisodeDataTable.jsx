import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination,TextField,Button, Box} from "@mui/material";

const EpisodeDataTable = ({ episodes }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchWord, setSearchWord] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
  const [orderName, setOrderName] = useState("asc");
  const [orderEpisode, setOrderEpisode] = useState("asc");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const EpisodeSearch = () => {
    if (searchWord.trim() === "") {
      setFilteredEpisodes(episodes);
    } else {
      const filtered = episodes.filter((episode) => {
        return (
          episode.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          episode.episode.toLowerCase().includes(searchWord.toLowerCase()) ||
          episode.air_date.toLowerCase().includes(searchWord.toLowerCase())
        );
      });
      setFilteredEpisodes(filtered);
    }
    setPage(0);
  };

  const SortByName = () => {
    const sorted = [...filteredEpisodes].sort((a, b) => {
      if (orderName === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredEpisodes(sorted);
    setOrderName(orderName === "asc" ? "desc" : "asc");
  };

  const SortByEpisode = () => {
    const sorted = [...filteredEpisodes].sort((a, b) => {
      if (orderEpisode === "asc") {
        return a.episode.localeCompare(b.episode);
      } else {
        return b.episode.localeCompare(a.episode);
      }
    });
    setFilteredEpisodes(sorted);
    setOrderEpisode(orderEpisode === "asc" ? "desc" : "asc");
  };

  const displayedEpisodes = filteredEpisodes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
        <Box sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}>
        <TextField
          label="Search Episode"
          variant="outlined"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={EpisodeSearch}>
          Search
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={SortByName} style={{ cursor: "pointer" }}>
                Episode Name {orderName === "asc" ? "↑" : "↓"}
              </TableCell>
              <TableCell onClick={SortByEpisode} style={{ cursor: "pointer" }}>
                Episode {orderEpisode === "asc" ? "↑" : "↓"}
              </TableCell>
              <TableCell>Air Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedEpisodes.map((episode) => (
              <TableRow 
              key={episode.id}
              sx={{
                '&:hover': {
                  backgroundColor: 'primary.light', 
                },
              }}
              >
                <TableCell>{episode.name}</TableCell>
                <TableCell>{episode.episode}</TableCell>
                <TableCell>{episode.air_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredEpisodes.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EpisodeDataTable;
