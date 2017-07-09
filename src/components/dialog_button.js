import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import OrgCard from './org_card';

const customContentStyle = {
  width: '90%',
  height: '90%'
};

const styles = {
  raisedButton: {
    marginRight: '10px'
  }
};

class DialogButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      tile: props.tile
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <RaisedButton
        label="Choose"
        primary={true}
        onTouchTap={this.handleClose}
        style={styles.raisedButton}
      />,
      <RaisedButton
        label="Donate"
        secondary={true}
        onTouchTap={this.handleClose}
        style={styles.raisedButton}
      />,
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Make a Change" onTouchTap={this.handleOpen} style={styles.raisedButton} secondary={true} />
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <OrgCard image={this.state.tile.img} title={this.state.tile.title} description={this.state.tile.description} />
        </Dialog>
      </div>
    );
  }
}

export default DialogButton;
