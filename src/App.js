import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import "./App.css";

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <Grid>
        <Navbar>
          <Header />
          <Sidebar />
        </Navbar>
        <Main />
        <Footer />
      </Grid>
    );
  }
}

export default App;
