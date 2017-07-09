import React, { Component }  from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: true };
  }

  render() {
    return (
      <AppBar
        title="Cents of Purpose"
        showMenuIconButton={false}
        iconElementRight={this.state.loggedIn ? 
                          <FlatButton label="Profile"/> : 
                          <FlatButton label="Sign Up/Log In" />}
      />
    );
  }
}

export default NavBar;
