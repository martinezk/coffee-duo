import React, { Component } from 'react';
import "./App.css";
import { Grid } from 'react-bootstrap';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <Grid fluid>
          <Header />
          <Sidebar />
          <Footer />
      </Grid>
    );
  }
}

export default App;
