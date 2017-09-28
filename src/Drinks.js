import React, { Component } from 'react';
import Axios from 'axios';

class Drinks extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }
  fetchData(url) {
    this.setState({ isLoading: true });

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        this.setState({ isLoading: false });

        return response;
      })
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch(() => this.setState({ hasErrored: true }));
    }
  componentDidMount(){
    this.fetchData('/api/json/Drinks.json');
  }  

  render(){
    if (this.state.hasErrored) {
      return <p>Error loading items</p>;
    }
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <ul>
        {this.state.items.map((item, index) => (
          <li key={index}>
            {item.Item}
          </li>
        ))}
      </ul>
    );
  }
}

  export default Drinks;