import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link';
import $ from 'jquery';

class Plaid extends Component {
  handleOnSuccess = (token, metadata) => {
    $.post('http://localhost:3000/plaid/access_token', {
      public_token: token
    }, function() {
      $('#container').fadeOut('fast', function() {
        $('#intro').hide();
        $('#app, #steps').fadeIn('slow');
      });
    });
  };

  render() {
    return (
       <PlaidLink
        apiVersion="v2"
        publicKey="212e2a3b78c3977954332bb00d67f2"
        product="auth"
        env="sandbox"
        clientName="Cents of Purpose"
        onSuccess={this.handleOnSuccess}
      />
    );
  }
}

export default Plaid;
