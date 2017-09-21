import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


class Sidebar extends Component {
  render() {
    return (
      <Navbar.Collapse>
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey={1} href='/'>Home</NavItem>
          <NavItem eventKey={2} href="/drinks">Drink Menu</NavItem>
          <NavItem eventKey={3} href="/food">Food Menu</NavItem>
        </Nav>
      </Navbar.Collapse>
    );
  }
}
export default Sidebar;