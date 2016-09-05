import App from './app';
import not_found from './templates/not-found';
import home from './templates/home';
import about from './templates/about';


import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, useRouterHistory } from 'react-router';
import React, { Component } from 'react';

import { createHashHistory } from 'history';
const div = document.getElementById('app');


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={home}/>
      	<Route path="about" component={about}/>
      	<Route path="*" component={not_found}/>
    </Route>
  </Router>,
div);