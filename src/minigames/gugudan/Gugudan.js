import React, { Component } from 'react';
import './Gugudan.css';

class Gugudan extends Component {
    constructor(props){
      super(props);
      this.state={
        value:'',
        result:'',
        firstNum:Math.ceil(Math.random()*9),
        lastNum:Math.ceil(Math.random()*9)
      }
  }
  gugudanSubmit = (e) => {
    e.preventDefault();
    console.log(typeof e.target[0].value);
    if(Number(e.target[0].value) === this.state.firstNum * this.state.lastNum){
      this.setState({
        value:'',
        result:'정답입니다. 답: '+this.state.firstNum * this.state.lastNum,
        firstNum:Math.ceil(Math.random()*9),
        lastNum:Math.ceil(Math.random()*9),
      })
    }else{
      this.setState({
        value:'',
        result:'틀렸습니다.',
      })
    }
  }
  gugudanChang = (e) =>  this.setState({
    value:e.target.value
  })
  render(){
    return (
      <div className="gugudan">
        <h1>구구단 게임</h1>
        <div className="gugudan-exam" title="구구단 문제">
          {this.state.firstNum} 곱하기는 {this.state.lastNum} 는?
        </div>
        <div className="gugudan-input">
          <form onSubmit={this.gugudanSubmit}>
            <input type="number" vlaue={this.state.value} onChange={this.gugudanChang} />
            <button>입력</button>
          </form>
        </div>
        <div className="gugudan-result">{this.state.result}</div>
      </div>
    );
  }
}
export default Gugudan;
