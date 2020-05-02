import React, { Component } from 'react';
import './Minigames.css';
import Gugudan from './gugudan/Gugudan.js';
import WordChain from './wordChain/WordChain.js';
import NumberBaseball from './numberBaseball/NumberBaseball.js';
import Tictactoe from './tictactoe/Tictactoe.js';

class Minigames extends Component {
  constructor(props){
    super(props);
    this.state = {
       isActive: false,
       minigamesList:[
                        {mgtitle:'title-gugudan', mgName:'구구단 게임', module:<Gugudan />},
                        {mgtitle:'title-wordChain', mgName:'끝말잇기', module:<WordChain />},
                        {mgtitle:'title-numberBaseball', mgName:'숫자야구', module:<NumberBaseball />},
                      //  {mgtitle:'title-tictactoe', mgName:'틱택토', module:<Tictactoe />},
                     ],
    }
  }
  seeGames = (e) => {
    var targetTag = e.target.parentElement.children[1];
    console.log(targetTag.style.display);// none == ''
    if(targetTag.style.display === 'block') targetTag.style.display = 'none';
    else targetTag.style.display = 'block';
//  if(this.state.isActive === false) this.setState({isActive: true});
  //else this.setState({isActive: false});
  };

  render(){
    return (
      <div className="minigames">
        <ol>
            {this.state.minigamesList.map( (mg, i) =>{
              return  <li key={i} className={mg.mgtitle}>
                        <h1 onClick={this.seeGames}>{mg.mgName}</h1>
                        <div id={i}>{mg.module}</div>
                      </li>
            })}
        </ol>
      </div>
    );
  }
}
export default Minigames;
