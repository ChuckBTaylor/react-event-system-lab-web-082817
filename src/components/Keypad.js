// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{
  constructor(){
    super();
  }
  enteringPassword = () => {
    console.log("Entering password...")
  }
  
  render(){
    return(
      <input type="password" onKeyUp={this.enteringPassword}>
      </input>
    )
  }
}

Keypad.defaultProps = {

}

Keypad.propTypes = {

}

export default Keypad;
