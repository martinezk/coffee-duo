import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/quiz-actions';
import { Col, Row, Thumbnail } from 'react-bootstrap';

class Drinks extends React.Component {
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

    return (
      <Row>
        {this.props.items.map((item, index) => (
          <Col xs={6} md={4} key={index}>
            <Thumbnail src={`api/images/drinks/${item.Image}`}>
              <h4>{item.Item}</h4>
              <p>{item.Description}</p>
            </Thumbnail>
          </Col>
        ))}
      </Row>
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

Drinks.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);