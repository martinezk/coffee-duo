import React, { Component } from 'react';

/*import Drinks from '../public/Json/Drinks.json';*/
import axios from 'axios';
import PairingQuiz from './PairingQuiz';
import Question from './Question';


class PairingQuizComp extends Component {
  constructor() {
    super();

    this.state = {
      /*questionId: 1,
      question: '',
      answerOptions: [],
      answerTypes: [],
      answerPairings:[],
      answer: '',
      result: ''*/
      items: [],
      hasErrored: false,
      isLoading: false
      /*this.handleChange = this.handleChange.bind(this);*/
    };
  }
  render() {
    if (this.state.hasErrored) {
      return <p>Error loading items</p>;
    }
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      /*<div>
        <h2>Food Pairings</h2>
        <Question content="What is your favorite drink?" />
      </div>*/
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
    );
  }
}

export default PairingQuizComp;
