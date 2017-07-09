import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/home_page';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>, 
  document.getElementById('root')
);

registerServiceWorker();
