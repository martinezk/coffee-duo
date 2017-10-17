import React from 'react';

class Button extends React.Component {
  render() {
    const buttonStyle = {
      width: 100,
      backgroundColor: "lightgrey",
      margin: 20
    };
    return(
      <button onClick={()=> {this.props.callback(this.props.type)}} style={buttonStyle}>{this.props.type}</button>
    );
  }
}

export default Button;