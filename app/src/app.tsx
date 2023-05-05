import React from 'react';
import logo from './logo.svg';
import './app.scss';
import Course from './course/course';
import { ThemeProvider } from './themeProvider';
import { DarkMode } from './darkMode';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <DarkMode />
        <Course />
        <footer className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
