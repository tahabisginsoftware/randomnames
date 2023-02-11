import { useState, useEffect } from 'react';
import logo from './logo512.png';
import './App.css';

import names from 'random-names-generator';

function App() {

  const [name, setName] = useState('');

  useEffect(() => {
    // Generate
    setName(names.random());
  }, []);
  
  const handleClick = () => {
    setName(names.random());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
          <h2>Click/Reload for new Name.</h2>
          <button className='getButton' onClick={handleClick}>Get Random Name</button>
          <h2>{name}</h2>        
        <a
          className="App-link"
          href="https://tahabisginsoftware.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Taha Bisgin.
        </a>
      </header>
    </div>
  );
}

export default App;
