import React from 'react'
import './App.css';
import Weather from './components/Weather'
import Nav from './components/UI/Nav/Nav'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Nav />
      <Weather />
      </div>
    </div>
    </Router>
  );
}

export default App;
