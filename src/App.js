import { Card, ListItem, Stack } from "@mui/material";

import "./App.css";
import Buttons from "./Buttons";
import TimeAndDate from "./TimeAndDate";
import Countries from "./Countries";

function App() {
  return (
    <div className='App'>
      <Countries />
      <Buttons />
      <TimeAndDate />
    </div>
  );
}

export default App;
