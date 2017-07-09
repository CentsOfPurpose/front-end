import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import DialogButton from './dialog_button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '95%',
    overflowY: 'auto',
    margin: '20px'
  },
  image: {
    width: '50%'
  },
  gridTile: {
    boxShadow: '0 0 1em #ccc'
  }
};

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tilesData: [
        {
          img: 'http://www.sfsafehouse.org/uploads/9/5/0/0/95007226/1481844508.png',
          title: 'San Francisco SafeHouse'
        },
        {
          img: 'https://c394391.ssl.cf2.rackcdn.com/1393379892.jpg',
          title: 'W.O.M.A.N. Inc.'
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Planned_Parenthood_logo.svg/1200px-Planned_Parenthood_logo.svg.png',
          title: 'Planned Parenthood'
        },
        {
          img: 'https://community.wwe.com/sites/default/files/komen_new_642.jpg',
          title: 'Susan G. Komen'
        },
        {
          img: 'http://womenscommunityclinic.org/wp-content/uploads/Oasis_WebHeaderLogo-620x265.png',
          title: 'Oasis For Girls'
        },
        {
          img: 'http://www.kidslovecampme.com/wp-content/uploads/2013/01/header-e1395942660935.png',
          title: "Bay Area Women's and Children's Center"
        }
      ]
    };
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={500}
          style={styles.gridList}
          padding={20}
        >
          {this.state.tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<DialogButton tile={tile} />}
              actionPosition="right"
              style={styles.gridTile}
            >
              <img src={tile.img} style={styles.image} alt="" />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Grid;
