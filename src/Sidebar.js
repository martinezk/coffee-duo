import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


class Sidebar extends Component {
  render() {
    return (
      <Navbar.Collapse>
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey={1} href="/home">Home</NavItem>
          <NavItem eventKey={2} href="/home">Pairings</NavItem>
          <NavItem eventKey={3} href="/home">Drink Menu</NavItem>
          <NavItem eventKey={4} href="/home">Food Menu</NavItem>
        </Nav>
      </Navbar.Collapse>
    );
  }
}
export default Sidebar;