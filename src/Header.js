import React, { Component } from 'react';
import "./App.css";

import { Button, Glyphicon, Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Nav>
        <Navbar.Header>
          <Navbar.Toggle>
            <Button bsStyle="link" bsSize="large">
              <Glyphicon glyph="menu-hamburger"></Glyphicon>
            </Button>
          </Navbar.Toggle>
          <Navbar.Brand>
            <i className="fa fa-coffee" aria-hidden="true"></i>
            <a href="#">Coffee Duo</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Nav>
    );
  }
}
export default Header;