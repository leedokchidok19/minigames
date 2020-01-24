import React, { Component } from 'react';
import './Minigames.css';
import Gugudan from './gugudan/Gugudan.js';

class Minigames extends Component {
  render(){
    return (
      <div className="minigames">
        <Gugudan />
      </div>
    );
  }
}
export default Minigames;
