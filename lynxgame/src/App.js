import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          En la noche cuando duermes malcom viene a espiar ten cuidado y pon un gran candado o malcom te vera encuerado
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende algo dinero
        </a>
      </header>
    </div>
  );
}

export default App;
