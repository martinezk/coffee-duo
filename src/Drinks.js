import React from 'react';
import Axios from 'axios';

class Drinks extends React.Component {
  render() {
    return (<div>
      <h1>Drinks</h1>
    </div>);
  };
  componentDidMount() {
    Axios.get('/api/json/Drinks.json')
      .then(function (response) {
        //give response.data to redux action
        //call the action and use response.data
      });
  };
};

export default Drinks;