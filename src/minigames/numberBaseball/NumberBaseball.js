import React, { Component } from 'react';

class NumberBaseball extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div className="numberBaseball">
        <div className="numberBaseball-top"></div>
        <div className="numberBaseball-middle">
          <form>
            <input type="number" />
            <button>입력</button>
          </form>
        </div>
      </div>
    );
  }
}
export default NumberBaseball;
