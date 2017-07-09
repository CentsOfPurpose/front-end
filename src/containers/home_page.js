import React, { Component } from 'react';
import {lightBlue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from '../components/nav_bar'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500
  }
});

class HomePage extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;
