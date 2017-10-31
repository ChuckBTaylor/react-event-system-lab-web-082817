// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{
  constructor(){
    super();
  }

  blurred = () => {
    console.log("Hey! Eyes on me!");
  }

  focused = () => {
    console.log("Good!");
  }

  render(){
    return(
      <button onFocus={this.focused} onBlur={this.blurred}>
      </button>
    )
  }
}

EyesOnMe.defaultProps = {

}

EyesOnMe.propTypes = {

}

export default EyesOnMe;
