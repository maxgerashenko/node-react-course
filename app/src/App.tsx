import React from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './course';

function App() {
  return (
    <div className="App">
      <Course />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
