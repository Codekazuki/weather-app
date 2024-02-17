import React from "react";
import ThunderstormTwoToneIcon from "@mui/icons-material/ThunderstormTwoTone";
import { Stack, Typography } from "@mui/material";

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
        <Stack>
          <Typography>heolkdn</Typography>
          <Typography>hello</Typography>
          <Typography>hello</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Details;
