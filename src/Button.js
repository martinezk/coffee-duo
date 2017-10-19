import React from 'react';
import { Button } from 'react-bootstrap';

class QuizButton extends React.Component {
  render() {

    return(
      <Button bsStyle="primary" onClick={()=> {this.props.callback(this.props.type)}}>{this.props.type}</Button>
    );
  }
}

export default QuizButton;