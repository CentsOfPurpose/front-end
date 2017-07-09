import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  plaid: {
    padding: '10px',
    border: 'none',
    background: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: '14px'
  },
  raisedButton: {
    marginTop: '25px',
    marginBottom: '10px'
  },
  div: {
    textAlign: 'center'
  }
};

class Plaid extends Component {
  handleOnSuccess = (token, metadata) => {
    $.post('http://localhost:3000/plaid/access_token', {
      token: token
    }, function() {
      $('#container').fadeOut('fast', function() {
        $('#intro').hide();
        $('#app, #steps').fadeIn('slow');
      });
    });
  };

  render() {
    return (
      <div style={styles.div}>
        <RaisedButton secondary={true} style={styles.raisedButton}>      
          <PlaidLink
            apiVersion="v2"
            publicKey="212e2a3b78c3977954332bb00d67f2"
            product="auth"
            env="sandbox"
            clientName="Cents of Purpose"
            onSuccess={this.handleOnSuccess}
            buttonText="Link Account with Plaid"
            style={styles.plaid}
          />
        </RaisedButton>
      </div>
    );
  }
}

export default Plaid;
