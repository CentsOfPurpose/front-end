import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {StripeProvider} from 'react-stripe-elements';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/home_page';
import UserProfile from './containers/user_profile';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/user" component={UserProfile} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>, 
  document.getElementById('root')
);

registerServiceWorker();
