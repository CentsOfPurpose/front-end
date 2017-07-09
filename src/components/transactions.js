import React, { Component } from 'react';
import $ from 'jquery';
import {pink600, pink300} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

import Chip from 'material-ui/Chip';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink600,
    accent1Color: pink300
  }
});

class Transactions extends Component {

    constructor() {
        super();
        this.transactions = [{"name":"KFC","amount":500,"roundUp":"0.00"},{"name":"Madison Bicycle Shop","amount":500,"roundUp":"0.00"},{"name":"CREDIT CARD 3333 PAYMENT *//","amount":25,"roundUp":"0.00"},{"name":"Uber 063015 SF**POOL**","amount":5.4,"roundUp":"0.60"},{"name":"CD DEPOSIT .INITIAL.","amount":1000,"roundUp":"0.00"},{"name":"Touchstone Climbing","amount":78.5,"roundUp":"0.50"},{"name":"United Airlines","amount":500,"roundUp":"0.00"},{"name":"McDonald's","amount":12,"roundUp":"0.00"},{"name":"Starbucks","amount":4.33,"roundUp":"0.67"},{"name":"SparkFun","amount":89.4,"roundUp":"0.60"},{"name":"INTRST PYMNT","amount":4.22,"roundUp":"0.78"},{"name":"United Airlines","amount":500,"roundUp":"0.00"},{"name":"Uber 072515 SF**POOL**","amount":6.33,"roundUp":"0.67"},{"name":"Tectra Inc","amount":500,"roundUp":"0.00"},{"name":"KFC","amount":500,"roundUp":"0.00"},{"name":"Madison Bicycle Shop","amount":500,"roundUp":"0.00"}];
      /*  $.ajax({
            url : "http://localhost:3000/plaid/transactions?username=user_good",
            method : "GET",
            success : (data) => {
                this.transactions = data;
            }
        })*/
    }

    render() {
        return (
        <Card>

            <List>
                 {this.transactions.map(function(listValue){
                    return <ListItem insetChildren={true} primaryText={(listValue.name)} secondaryText={("$" + listValue.amount)} rightIcon={ <Chip
          style={{ "margin" : "4px", "margin-right" : "100px", "width" : "120px"}}
        >
        Round up {listValue.roundUp}
        </Chip>}></ListItem>;
                })}
            </List>
            </Card>
        );
    }
}

export default Transactions;
