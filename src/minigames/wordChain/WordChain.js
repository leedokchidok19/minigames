import React, { Component } from 'react';

class WordChain extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'',
      result:'고구마',
    }
  }
  lastAndFirst = (e) => this.setState({
    value:e.target.value
  })
  wordChain = (e) =>{
    e.preventDefault();
//    console.log(e.target[0].value);
    var inputWord = this.state.value;
    var resultWord = this.state.result;
    inputWord = inputWord.substring(0,1);
    resultWord = resultWord.substr(resultWord.length-1);
//    console.log(inputWord, resultWord);
    if(inputWord === resultWord){
      this.setState({
        value:'',
        result:this.state.value,
      })
    }else{
      alert('다른 단어를 입력해주세요.');
      this.setState({
        value:'',
      })
    }
    e.target[0].focus();
  }
  render(){
    return (
      <div className="wordChain">
        <div className="wordChain-top">{this.state.result}</div>
        <div className="wordChain-middle">
          <form onSubmit={this.wordChain}>
            <input type="text" value={this.state.value} onChange={this.lastAndFirst} />
            <button>입력</button>
          </form>
        </div>
      </div>
    );
  }
}
export default WordChain;
