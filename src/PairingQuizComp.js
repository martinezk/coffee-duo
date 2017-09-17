import React, { Component } from 'react';

import Drinks from '../public/Json/Drinks.json';
import Question from './Question';


class PairingQuizComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
     questionId: 1,
     question: '',
     answerOptions: [],
     answerTypes: [
       hot, 
       cold
     ],
     answerPairings:[
      sweet,
      sour, 
      savory, 
      bitter
     ],
     answer: '',
     result: ''
    };
  }
  render() {
    return (
      <div>
        <h2>Food Pairings</h2>
        <Question content="What is your favorite drink?" />
      </div>
      
    );
  }
}

export default PairingQuizComp;
