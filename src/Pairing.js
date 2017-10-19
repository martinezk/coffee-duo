import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/quiz-actions';
import { Col, Row, Thumbnail, Button } from 'react-bootstrap';

class Pairing extends React.Component {
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
      <div>
        <h3>Choose which drink best suits you.</h3>
        <Row>
          {this.props.items.map((item, index) => (
            <Col xs={6} md={4} key={index}>
              <Thumbnail src={item.Image}>
                <Button bsStyle="primary">{item.Item}</Button>
              </Thumbnail>
            </Col>
          ))}
        </Row>
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

Pairing.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Pairing);