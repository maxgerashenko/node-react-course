import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Course from './course';

function App() {
  return (
    <div className="App">
      <Course />
      <footer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
