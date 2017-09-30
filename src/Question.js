import React from 'react';

class Question extends React.Component {

  render() {
    const buttonStyle = {
      width: 100,
      backgroundColor: "lightgrey",
      margin: 10
    }

    const buttonHot = () =>{
      console.log('hot');
    }

    const buttonCold = () =>{
      console.log('cold');
    }

    return (
      <div>
        <h3>What type of beverage are you in the mood for?</h3>
        <button onClick={buttonHot} style={buttonStyle}>Hot</button>
        <button onClick={buttonCold} style={buttonStyle}>Cold</button>
      </div>
    );
  }
}

export default Question;