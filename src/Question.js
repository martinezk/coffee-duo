import React from 'react';

class Question extends React.Component {

  render() {
    const buttonStyle = {
      width: 100,
      backgroundColor: "lightgrey",
      margin: 10
    }
    return (
      <div>
        <h3>What type of beverage are you in the mood for?</h3>
        <button onClick={() => this.props.callback("Hot")} style={buttonStyle}>Hot</button>
        <button onClick={() => this.props.callback("Cold")} style={buttonStyle}>Cold</button>
      </div>
    );
  }
}

export default Question;