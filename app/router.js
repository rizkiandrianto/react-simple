import App from './app';
import not_found from './templates/not-found';
import home from './templates/home';
import about from './templates/about';


import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, useRouterHistory } from 'react-router';
import React, { Component } from 'react';

import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const div = document.getElementById('app');


render(
 /**
 
 	NOTES:
 	1. 	change <Router history={}> to 'browserHistory' to get pretty URL like this http://localhost/about, but...
 		- when you enter the route manually via browser address bar, or refresh browser, you'll get "Cannot GET /address"
 		- BAD for SEO
 		+ Pretty URL
 	2.	change <Router history={}> to 'appHistory' to get address bar or refresh working.
 		the URL will be like http://localhost/#/about, but...
 		- not very pretty URL
 
  */
 
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={home}/>
      	<Route path="about" component={about}/>
      	<Route path="*" component={not_found}/>
    </Route>
  </Router>,
div);