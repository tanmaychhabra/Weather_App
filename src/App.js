import React from 'react'
import './App.css';
import Weather from './components/Weather'
import Nav from './components/UI/Nav/Nav'


function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      <Weather />
      </div>
    </div>
  );
}

export default App;
