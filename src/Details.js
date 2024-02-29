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
        sx={{ width: "100vw", backgroundColor: "green" }}
      >
        <ThunderstormTwoToneIcon
          fontSize='large'
          sx={{ color: "info", height: "50%" }}
        />
        <Typography>87°</Typography>
        <Stack
          sx={{
            color: "red",
          }}
        >
          <Typography>Humidity</Typography>
          <Typography>wind speed</Typography>
          <Typography>hello</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Details;
