import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { itemsFetchData, itemTypeHot, itemTypeCold } from './actions/quiz-actions';
import Pairing from './Pairing';
import Question from './Question';
import FinalPairing from './FinalPairing';

class PairingQuiz extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchData('/api/json/Drinks.json');
  }
  pairingQuizQuestion = (type) =>{
    this.setState({type : type});
    if(type==="Hot"){
      this.props.typeHot();
    } else if (type==="Cold"){
      this.props.typeCold();
    }
  }
  finalPairing = (pairing) =>{
    this.setState({pairing : pairing});
    //call reducer to filter by pairing
  }
  
  render() {
    let component;
    if (this.props.hasErrored) {
      component = <p>Error loading items</p>;
    } else if (this.props.isLoading) {
      component = <p>Loading...</p>;
    } else if (this.state.pairing){
      component = <FinalPairing />
    } else if (this.state.type){
      component = <Pairing callback={this.finalPairing}/>;
    } else {
      component = <Question callback={this.pairingQuizQuestion}/>;
    } 
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
    fetchData: (url) => dispatch(itemsFetchData(url)),
    typeHot: () => dispatch(itemTypeHot()),
    typeCold: () => dispatch(itemTypeCold())
  };
};

PairingQuiz.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PairingQuiz);