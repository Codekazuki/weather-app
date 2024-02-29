import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const Buttons = () => {
  return (
    <div>
      <Stack direction='row' justifyContent='center' margin=' 1rem  0'>
        <Stack direction='row'>
          <TextField placeholder='search.....' />

          <Stack direction='row' sx={{ margin: " 0 4rem", padding: "1rem" }}>
            <SearchIcon />

            <AddLocationAltIcon fontSize='large' />
          </Stack>

          <Stack direction='row'>
            <Typography> °C | </Typography>
            <Typography> °F </Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Buttons;
