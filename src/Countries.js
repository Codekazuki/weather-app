import { Card, Stack, ListItem } from "@mui/material";
import React from "react";

const Countries = () => {
  return (
    <div>
      <Card sx={{ backgroundColor: "red" }}>
        <Stack direction='row' spacing={4} sx={{ color: "white" }}>
          <ListItem>Lagos</ListItem>
          <ListItem>London</ListItem>
          <ListItem>Tokyo</ListItem>
          <ListItem>Helsinki</ListItem>
          <ListItem>Harare</ListItem>
        </Stack>
      </Card>
    </div>
  );
};

export default Countries;
