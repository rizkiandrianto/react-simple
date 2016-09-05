import App from './App';
import NotFound from './app/templates/NotFound' ;
import Hello from './app/components/Hello';
import World from './app/components/World';

import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, useRouterHistory } from 'react-router';
import React, { Component } from 'react';

import { createHashHistory } from 'history';
const div = document.getElementById('app');


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={World}/>
      	<Route path="profile" component={Hello}/>
      	<Route path="*" component={NotFound}/>
    </Route>
  </Router>,
div);