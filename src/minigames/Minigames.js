import React, { Component } from 'react';
import './Minigames.css';
import Gugudan from './gugudan/Gugudan.js';
import WordChain from './wordChain/WordChain.js';
import NumberBaseball from './numberBaseball/NumberBaseball.js';

class Minigames extends Component {
  constructor(props){
    super(props);
    this.state = {
       isActive: false
    }
  }
  seeGames = () => {
  if(this.state.isActive === false) this.setState({isActive: true});
  else this.setState({isActive: false});
  };
  
  render(){
    return (
      <div className="minigames">
        <ol>
          <li className="title-gugudan">
            <h1 onClick={this.seeGames}>구구단 게임</h1>{this.state.isActive ? (<Gugudan />) : ('')}
          </li>
          <li className="title-wordChain">
            <h1 onClick={this.seeGames}>끝말잇기</h1>{this.state.isActive ? (<WordChain />) : ('')}
          </li>
          <li>
            <h1 onClick={this.seeGames}>숫자야구</h1>{this.state.isActive ? (<NumberBaseball />) : ('')}
          </li>
        </ol>
      </div>
    );
  }
}
export default Minigames;
