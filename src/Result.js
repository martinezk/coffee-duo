import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Thumbnail } from 'react-bootstrap';
import { itemsFetchData } from './actions/quiz-actions';

class Result extends React.Component {
  render() {
    return (
      <div>
        <h3>Recommended items</h3>
        <Row>
          {this.props.items.map((item, index) => (
            <Col xs={6} md={3} key={index}>
              <Thumbnail src={`api/images/food/${item.ImageURL}`}>
                <h4>{item.Item}</h4>
                <p>{item.Description}</p>
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
    items: state.food,
    hasErrored: state.foodHasErrored
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Result);