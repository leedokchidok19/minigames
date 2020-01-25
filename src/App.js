import React, { Component } from 'react';
import './App.css';
import MinigamesModules from './minigames/Minigames.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        <MinigamesModules />
      </div>
    );
  }
}
export default App;
