import React from 'react';

class Button extends React.Component {
  render() {
    const buttonStyle = {
      width: 100,
      backgroundColor: "lightgrey",
      margin: 20
    };
    return(
      <button style={buttonStyle}>{this.props.type}</button>
    );
  }
}

export default Button;