import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class OrgCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: props.image,
      title: props.title,
      text: 'Org description'
    };
  }

  render() {
    return (
      <Card>
        <CardMedia>
          <img src={this.state.image} alt="" />
        </CardMedia>
        <CardTitle title={this.state.title} />
        <CardText>{this.state.text}</CardText>
      </Card>
    );
  }
}

export default OrgCard;
