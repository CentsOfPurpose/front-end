import React, { Component } from 'react';
import {lightBlue500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from '../components/nav_bar';
import TextFieldTest from '../components/user_fields';
import ProfilePage from '../components/user_fields'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500
  }
});

class UserProfile extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar />
          <TextFieldTest />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserProfile;
