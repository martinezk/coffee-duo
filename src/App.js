import React, { Component } from 'react';
import { Grid, Nav, Navbar } from 'react-bootstrap';
import "./App.css";

import Footer from './Footer';
import Header from './Header';
import PairingQuizComp from './PairingQuizComp';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <Grid>
        <Navbar>
          <Header />
          <Sidebar />
        </Navbar>
        <PairingQuizComp />
        <Footer />
      </Grid>
    );
  }
}

export default App;
