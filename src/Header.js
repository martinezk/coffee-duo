import React, { Component } from 'react';
import "./App.css";

import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar.Header>
        <Navbar.Brand>
          <i className="fa fa-coffee" aria-hidden="true"></i>
          <a href="#">Coffee Duo</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    );
  }
}
export default Header;