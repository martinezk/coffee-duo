import React from 'react';
import Button from './Button';

class Question extends React.Component {

  render() {
    return (
      <div>
        <h3>What type of beverage are you in the mood for?</h3>
        <Button type="Hot" />
        <Button type="Cold" />
      </div>
    );
  }
}

export default Question;