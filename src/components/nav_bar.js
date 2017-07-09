import React, { Component }  from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router-dom';

const styles = {
  homeButton: {
    color: 'white',
    margin: '8px',
    width: 30,
    height: 30
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: true };
  }

  render() {
    return (
      <AppBar
        title="Cents of Purpose"
        showMenuIconButton={true}
        iconElementRight={this.state.loggedIn ? 
                          <FlatButton label="Profile" href="/user" /> : 
                          <FlatButton label="Sign Up/Log In" />}
        iconElementLeft={<Link to="/"><ActionHome style={styles.homeButton} /></Link>}
      />
    );
  }
}

export default NavBar;
