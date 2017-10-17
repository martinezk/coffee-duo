import React from 'react';
import Button from './Button';

class Question extends React.Component {

  render() {
    return (
      <div>
        <h3>What type of beverage are you in the mood for?</h3>
        <Button callback={this.props.callback} type="Hot" />
        <Button callback={this.props.callback} type="Cold" />
      </div>
    );
  }
}

export default Question;