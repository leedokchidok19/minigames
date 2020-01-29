import React, { Component } from 'react';

class NumberBaseball extends Component {
  constructor(props){
    super(props);
    this.state ={
      numberBaseball:'',
      baseballMessage:'',
    }
  }
  componentDidMount() {
        this.startBaseball()
    }
  startBaseball = () =>{
    var listNum = [1,2,3,4,5,6,7,8,9]
    var outputNum = [];
    for(var i=0;i<4;i++){
      var randomNum = Math.ceil( (Math.random()*8 ) );
//      console.log(randomNum);
      if(outputNum.indexOf(randomNum+1) === -1) outputNum.push(listNum[randomNum]);
      else{i--}//중복되지 않는 숫자를 배열에 추가, 중복되는 숫자일 경우 i를 감소시킨다
//      console.log(outputNum.indexOf(randomNum));
//      console.log(outputNum);
    }
    var resultNum = outputNum.join('');
    this.setState({
      numberBaseball:resultNum,
    })
//    console.log('실행 되었습니다',resultNum);
  }
  throwABall = (e) =>{
    e.preventDefault();
//    console.log(typeof e.target[0].value); input.type=[number]을 써도 String 타입으로 넘어온다
    var inputNum = Array.from( e.target[0].value );
    var outputNum = Array.from( this.state.numberBaseball );
    var strike = 0;
    var ball = 0;
    var resultMsg = null;
    console.log(typeof outputNum[0],typeof inputNum[0]);
    console.log(outputNum, inputNum);
    for(var i=0;i<inputNum.length;i++){
      if(inputNum[i] === outputNum[i]){
        strike = strike+1;
      }else if (outputNum.indexOf(inputNum[i]) > -1) {

        ball = ball+1;
      }//if
    }//for
    if(strike === inputNum.length){
      resultMsg = '홈런!';
      this.startBaseball();
    }else{
      resultMsg = strike+'스트라이크 '+ball+'볼';
    }
    this.setState({
      baseballMessage: resultMsg,
    })
    e.target[0].value = '';
    e.target[0].focus();
  }
  render(){
    return (
      <div className="numberBaseball">
        <div className="numberBaseball-top">
          <input type="hidden" value={this.state.numberBaseball} readOnly/>
          {this.state.baseballMessage}
        </div>
        <div className="numberBaseball-middle">
          <form onSubmit={this.throwABall}>
            <input type="text" maxLength="4" />
            <button>입력</button>
          </form>
        </div>
      </div>
    );
  }
}
export default NumberBaseball;
