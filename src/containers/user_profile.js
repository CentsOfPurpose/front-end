import React, { Component } from 'react';
import {pink600, pink300} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from '../components/nav_bar';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink600,
    accent1Color: pink300
  }
});

class UserProfile extends Component {
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

export default UserProfile;
