import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../components/nav_bar'

class HomePage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;
