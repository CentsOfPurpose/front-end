import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import DialogButton from './dialog_button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '95%',
    overflowY: 'auto'
  },
  image: {
    width: '80%'
  }
};

const tilesData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Planned_Parenthood_logo.svg/1200px-Planned_Parenthood_logo.svg.png',
    title: 'Planned Parenthood'
  },
  {
    img: 'https://pbs.twimg.com/profile_images/431950561949138944/ACdZkMDp.jpeg',
    title: 'W.O.M.A.N. Inc.'
  },
  {
    img: 'http://www.sfsafehouse.org/uploads/9/5/0/0/95007226/1481843327.png',
    title: 'San Francisco SafeHouse'
  },
  {
    img: 'https://s3.amazonaws.com/givezooks_s3_production/media_files/199749/SF_DVC_logo.jpg',
    title: 'San Francisco Domestic Violence Consortium'
  },
  {
    img: 'http://www.kidslovecampme.com/wp-content/uploads/2013/01/header-e1395942660935.png',
    title: "Bay Area Women's and Children's Center"
  }
];

class Grid extends Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={500}
          style={styles.gridList}
          padding={20}
        >
          <Subheader>Charities</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<DialogButton />}
              actionPosition="right"
            >
              <img src={tile.img} style={styles.image} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Grid;
