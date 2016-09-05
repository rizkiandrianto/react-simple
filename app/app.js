import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, useRouterHistory, Link } from 'react-router';



class App extends Component {
	render(){
		return(
			<div>
				<p>React Simple</p>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="about">About</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}

export default App