import { Button, Card, Grid, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Button variant='contained'>Lets go</Button>
          </Grid>
          <Grid item xs={4}>
            <Typography>Some Countries</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Weather</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography> Humidity </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default App;
