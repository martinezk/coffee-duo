import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/quiz-actions';

class Drinks extends React.Component {
  componentDidMount(){
    this.props.fetchData('/api/json/Drinks.json');
  }  

  render(){
    if (this.props.hasErrored) {
      return <p>Error loading items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>
            {item.Item}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps= (state) =>{
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

Drinks.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);