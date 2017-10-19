import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { itemsFetchData, itemTypeHot, itemTypeCold } from './actions/quiz-actions';
import Pairing from './Pairing';
import Question from './Question';

class PairingQuiz extends React.Component {
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

  render() {
    console.log(this.props.items);
    let component;
    if (this.props.hasErrored) {
      component = <p>Error loading items</p>;
    } else if (this.props.isLoading) {
      component = <p>Loading...</p>;
    } else {
      component = <Question callback={this.pairingQuizQuestion}/>;
    }
    //else if statement for final pairing
    return (
      <div>
        <Pairing />
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