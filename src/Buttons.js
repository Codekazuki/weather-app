import { Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const Buttons = () => {
  return (
    <div>
      <Container>
        <TextField placeholder='search.....' />
        <Stack direction='row'>
          <SearchIcon />

          <AddLocationAltIcon fontSize='large' />
        </Stack>
        <Stack direction='row'>
          <Typography> °C | </Typography>
          <Typography> °F </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Buttons;
