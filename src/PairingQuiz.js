import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { itemsFetchData } from './actions/quiz-actions';

import Question from './Question';

class PairingQuiz extends React.Component {
  componentDidMount() {
    this.props.fetchData('/api/json/Drinks.json');
  }
  hotOrCold(temperature){
    this.setState({temperature: temperature})
    //reducer for filtering drinks
  }
  render() {
    let component;
    if (this.props.hasErrored) {
      component = <p>Error loading items</p>;
    } else if (this.props.isLoading) {
      component = <p>Loading...</p>;
    /*else if this.state.temperature{
      component = hot or cold drinks
    } */
    } else {
      component = <Question callback={this.hotOrCold}/>;
    }
    //else if statement for final pairing
    return (
      <div>
        {component}
      </div>
    );
  }
}
//import a result component
//result function -- "if item is drink type x, then display food type x"

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