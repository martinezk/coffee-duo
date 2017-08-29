import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


class Sidebar extends Component {
  render() {
    return (
      <Navbar.Collapse>
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey={1} href="/home">Home</NavItem>
          <NavItem eventKey={2} >Pairings</NavItem>
          <NavItem eventKey={3} >Drink Menu</NavItem>
          <NavItem eventKey={4} >Food Menu</NavItem>
        </Nav>
      </Navbar.Collapse>
    );
  }
}
export default Sidebar;