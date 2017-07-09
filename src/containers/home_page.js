import React, { Component } from 'react';
import {lightBlue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from '../components/nav_bar';
import Grid from '../components/grid';
import Plaid from '../components/plaid_link';

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
          <Plaid />
          <Grid />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;
