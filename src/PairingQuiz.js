import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { itemsFetchData,foodFetchData, itemTypeHot, itemTypeCold, itemPairing } from './actions/quiz-actions';
import Pairing from './Pairing';
import Question from './Question';
import Result from './Result';

class PairingQuiz extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchData('/api/json/Drinks.json');
    this.props.foodData('/api/json/Food.json');
  }
  drinkQuizQuestion = (type) =>{
    this.setState({type : type});
    if(type==="Hot"){
      this.props.typeHot();
    } else if (type==="Cold"){
      this.props.typeCold();
    }
  }
  
  finalResult = (pairing) =>{
    this.setState({pairing : pairing});    
    this.props.typePairing(pairing);
  }
  
  render() {
    let component;
    console.log(this.props.food);
    if (this.props.hasErrored) {
      component = <p>Error loading items</p>;
    } else if (this.props.isLoading) {
      component = <p>Loading...</p>;
    } else if (this.state.pairing){
      component = <Result />
    } else if (this.state.type){
      component = <Pairing callback={this.finalResult}/>;
    } else {
      component = <Question callback={this.drinkQuizQuestion}/>;
    } 
    return (
      <div>
        {component}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    food: state.food,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    foodData: (url) => dispatch(foodFetchData(url)),
    typeHot: () => dispatch(itemTypeHot()),
    typeCold: () => dispatch(itemTypeCold()),
    typePairing: (pairing) => dispatch(itemPairing(pairing))
  };
};

PairingQuiz.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PairingQuiz);