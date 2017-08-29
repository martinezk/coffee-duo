import React, { Component } from 'react';

import Question from './Question';

class PairingQuizComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       nintendo: 0,
       microsoft: 0,
       sony: 0
     },
     result: ''
    };
  }
  render() {
    return (
      <div>
        <h2>Food Pairings</h2>
        <Question content="What is your sign?" />
      </div>
      
    );
  }
}

export default PairingQuizComp;
