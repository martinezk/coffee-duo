import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

class Card extends React.Component {
  render() {
    return (
      <Col xs={6} md={4} key={this.props.index}>
        <Thumbnail src={this.item.Image}>
          <h5>{this.item.Item}</h5>
          <p>{this.item.Description}</p>
        </Thumbnail>
      </Col>
    );
  }
}

export default Card;