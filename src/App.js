import { Card, ListItem, Stack } from "@mui/material";

import "./App.css";
import Buttons from "./Buttons";

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
      </Card>
      <Buttons />
    </div>
  );
}

export default App;
