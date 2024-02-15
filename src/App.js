import { Button, Card, Typography } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Card sx={{ backgroundColor: "red" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={8}>
            <Typography>xs=8</Typography>
          </Grid>
          <Grid xs={4}>
            <Button>xs=4</Button>
          </Grid>
          <Grid xs={4}>
            <Typography>xs=4</Typography>
          </Grid>
          <Grid xs={8}>
            <Button>xs=8</Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default App;
