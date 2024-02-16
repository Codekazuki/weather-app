import "./App.css";
import Buttons from "./Buttons";
import TimeAndDate from "./TimeAndDate";
import Countries from "./Countries";
import Details from "./Details";

function App() {
  return (
    <div className='App'>
      <Countries />
      <Buttons />
      <TimeAndDate />
      <Details />
    </div>
  );
}

export default App;
