import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, useRouterHistory, Link } from 'react-router';
import router from './router.js';



class App extends Component {
	render(){
		return(
			<div>
				<p>Sempak</p>
				<Link to="profile">Profile</Link>
				{this.props.children}
			</div>
		)
	}
}

export default App