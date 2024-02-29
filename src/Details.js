import React from "react";
import ThunderstormTwoToneIcon from "@mui/icons-material/ThunderstormTwoTone";
import { Container, Stack, Typography } from "@mui/material";

const Details = () => {
  return (
    <div>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        padding={5}
        sx={{ width: "100vw" }}
      >
        <ThunderstormTwoToneIcon />
        <Typography>87°</Typography>
        <Stack
          sx={{
            padding: "2rem",
            color: "red",
          }}
        >
          <Typography>Humidity</Typography>
          <Typography>wind speed</Typography>
          <Typography>hello</Typography>
        </Stack>
      </Stack>
      <Container
        sx={{
          padding: "5rem",
          color: "red",
        }}
      >
        <Typography>eeeee</Typography>
        <Typography>eeeee</Typography>
        <Typography>eeeee</Typography>
        <Typography>eeeee</Typography>
      </Container>
    </div>
  );
};

export default Details;
