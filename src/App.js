import {
  Button,
  Card,
  Container,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Card sx={{ backgroundColor: "red" }}>
        <Stack direction='row' spacing={4} sx={{ color: "white" }}>
          <ListItem>Lagos</ListItem>
          <ListItem>London</ListItem>
          <ListItem>Tokyo</ListItem>
          <ListItem>Helsinki</ListItem>
          <ListItem>Harare</ListItem>
        </Stack>
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
            <Container>below</Container>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default App;
