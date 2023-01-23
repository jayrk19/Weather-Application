import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [clicked, setClicked] = useState(0);

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <div className="input">
        <Input long={long} setLong={setLong} lat={lat} setLat={setLat} clicked={clicked} setClicked={setClicked}/>
      </div>
      {clicked!==0 && 
        <Output long={long} setLong={setLong} lat={lat} setLat={setLat} clicked={clicked} setClicked={setClicked}/>

      }
    </div>
  );
}

export default App;
