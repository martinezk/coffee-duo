import React, { Component } from 'react';
import "./App.css";
import { Grid, Navbar } from 'react-bootstrap';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <Grid>
        <Navbar>
          <Header />
          <Sidebar />
        </Navbar>
        <Footer />
      </Grid>
    );
  }
}

export default App;
