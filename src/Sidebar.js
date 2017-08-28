import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';


class Sidebar extends Component {
  render() {
    return (
      <Nav bsStyle="tabs" stacked activeKey={1}>
        <NavItem eventKey={1} href="/home">Home</NavItem>
        <NavItem eventKey={2} >Drink Menu</NavItem>
        <NavItem eventKey={3} >Food Menu</NavItem>
      </Nav>
    );
  }
}
export default Sidebar;