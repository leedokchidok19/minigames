import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MinigamesModules from './minigames/Minigames.js';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
      <MinigamesModules />
      </div>
    );
  }
}
export default App;
