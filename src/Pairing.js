import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/quiz-actions';
import { Col, Row, Thumbnail } from 'react-bootstrap';
import Button from './Button';

class Pairing extends React.Component {
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
            <Col xs={6} md={3} key={index}>
              <Thumbnail src={`api/images/drinks/${item.Image}`}>
                <Button callback={() => this.props.callback(item.Pairing)} name={item.Item} type={item.Pairing} />
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