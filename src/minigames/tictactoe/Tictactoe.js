import React, {Component} from 'react';
import './Tictactoe.css';

class Tictactoe extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="tictactoe">
        <table>
          <tbody>
            <tr>
              <td>  </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Tictactoe;
