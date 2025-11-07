import React from 'react';
import ReactDOM from 'react-dom/client';
//import MyFile from './MyFile';
//import StyleComponent from './src/StyleComponent';
//import ChildComponent from './ChildComponent';
import App from "./App";


const Josh = ReactDOM.createRoot(document.getElementById('Josh'));
Josh.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);















/*
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [dark, setDark] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (city) {
      
      setWeather(`Weather in ${city} is sunny`);
    }
  }, [city]);

  return (
    <div style={{ background: dark ? 'grey' : 'cream', 
      color: dark ? 'white' : 'black', padding: 20 }}>
      <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
      <br /><br />
      <input
        ref={inputRef}
        placeholder="Type a city and press Enter"
        onKeyDown={e => e.key === 'Enter' && setCity(e.target.value)}
      />
      <p>{weather}</p>
    </div>
  );
}
*/