import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { itemsFetchData } from './actions/quiz-actions';

class PairingQuiz extends React.Component {
  componentDidMount() {
    this.props.fetchData('/api/json/Drinks.json');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Error loading items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    const buttonStyle = {
      width: 100,
      backgroundColor: "lightgrey",
      margin: 10
    }

    return (
      <div>
        <h3>What type of beverage are you in the mood for?</h3>
        <button style={buttonStyle}>Hot</button>
        <button style={buttonStyle}>Cold</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

PairingQuiz.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PairingQuiz);