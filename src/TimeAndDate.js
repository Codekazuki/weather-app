import { Card, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const TimeAndDate = () => {
  return (
    <div>
      <Card sx={{ height: "10rem" }}>
        <Stack
          direction='row'
          divider={<Divider orientation='vertical' flexItem />}
          spacing={4}
          justifyContent='center'
        >
          <Typography>Tuesday,31 May 2024 |</Typography>

          <Typography> Local time: 15:45am </Typography>
        </Stack>
        <Typography>Ikole Ekiti,Nigeria </Typography>
      </Card>
    </div>
  );
};

export default TimeAndDate;
