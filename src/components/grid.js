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
          title: 'San Francisco SafeHouse',
          description: 'San Francisco SafeHouse is a nurturing and empowering living community for homeless women escaping sexual exploitation, prostitution, and sex trafficking. San Francisco SafeHouse is the only residential program of its kind in the city. It is also one of the few nationwide. Since its founding, SafeHouse has served over 350 women and successfully created a healing space that addresses gender-specific trauma, homelessness and substance abuse.'
        },
        {
          img: 'https://c394391.ssl.cf2.rackcdn.com/1393379892.jpg',
          title: 'W.O.M.A.N. Inc.',
          description: 'Since 1978, W.O.M.A.N., Inc. has offered survivors of domestic violence comprehensive services, tailored to meet their individual needs. W.O.M.A.N., Inc. understands the complexities of domestic violence and as such, we highly value meeting survivors where they’re at.  Survivors who connect with us are coming from different points in their healing process; some are still in their relationship, some have left, but regardless of where they’re at we support them all. We believe survivors, friends, and family deserve to be treated with respect and dignity, to be honored and valued.'
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Planned_Parenthood_logo.svg/1200px-Planned_Parenthood_logo.svg.png',
          title: 'Planned Parenthood',
          description: 'Planned Parenthood was founded on the revolutionary idea that women should have the information and care they need to live strong, healthy lives and fulfill their dreams — no ceilings, no limits. Planned Parenthood is America’s most trusted provider of reproductive health care. Our skilled health care professionals are dedicated to offering all people high-quality, affordable medical care. The heart of Planned Parenthood is in the local community. Our 56 unique, locally governed affiliates nationwide operate more than 600 health centers, which reflect the diverse needs of their communities.'
        },
        {
          img: 'https://community.wwe.com/sites/default/files/komen_new_642.jpg',
          title: 'Susan G. Komen',
          description: 'Breast cancer is the most common cancer among women in the U.S. and around the world. In 2017, about 255,180 new cases of invasive breast cancer will be diagnosed in the U.S. alone. So, no matter who you are or where you live, breast cancer may touch your life. We’ve transformed how the world treats and talks about this disease and have helped turn millions of breast cancer patients into breast cancer survivors. Since 1982, we’ve funded more than $920 million in research, more than $2.0 billion in medical care, community and provider education, and psychosocial support, serving millions in over 60 countries worldwide.'
        },
        {
          img: 'http://womenscommunityclinic.org/wp-content/uploads/Oasis_WebHeaderLogo-620x265.png',
          title: 'Oasis For Girls',
          description: 'Oasis For Girls partners with young women of color aged 14-18 from under-resourced communities in San Francisco many of whom are on the edge of risk, not on anyone’s radar, disengaged or under-supported, or just beginning to dabble in difficulty. By almost any measure, to be young, female, and of color in San Francisco means the odds are stacked against you. Our girls face more barriers to resources and opportunities, and are disproportionately impacted by systemic inequalities and policies than other girls their age. Many of their peers will not finish high school, enter into high-growth industries, or be able to leave high-poverty neighborhoods. We believe that comprehensive change in our communities starts with the girls being affected now.'
        },
        {
          img: 'http://www.kidslovecampme.com/wp-content/uploads/2013/01/header-e1395942660935.png',
          title: "Bay Area Women's and Children's Center",
          description: "In the heart of San Francisco's Tenderloin neighborhood, Bay Area Women's and Children's Center is a unique presence. BAWCC focuses entirely on the needs and issues of low-income families, children, and women in this multi-ethnic, inner-city neighborhood."
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
