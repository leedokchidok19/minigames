import React, { Component } from 'react';
import './App.css';
import MinigamesModules from './minigames/Minigames.js';
import img_logo from "./logo.svg";

class App extends Component {
  render(){
    return (
      <div className="App">
      <header className="header">
        <div className="header-logo">
          <img className="logo" src={img_logo} title="logo" alt="logo" target="_blank"/>
        </div>
      </header>
        <MinigamesModules />
      </div>
    );
  }
}
export default App;
