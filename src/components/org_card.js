import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class OrgCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: 'http://www.theslothinstitutecostarica.org/wp-content/uploads/2014/08/Jon-Snow.jpg',
      title: 'Org Name',
      text: 'Org description'
    };
  }

  render() {
    return (
      <Card>
        <CardMedia>
          <img src={this.state.picture} alt="" />
        </CardMedia>
        <CardTitle title={this.state.title} />
        <CardText>{this.state.text}</CardText>
      </Card>
    );
  }
}

export default OrgCard;
