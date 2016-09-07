import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, useRouterHistory, Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer  } from 'react-router-bootstrap';


class App extends Component {
	render(){
		return(
			<div>
				<Navbar>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">React-Bootstrap</a>
				      </Navbar.Brand>
				    </Navbar.Header>
				    <Nav>
				    	<IndexLinkContainer  to={{ pathname: '/'}}>
				      		<NavItem eventKey={1}>
								Home	  
				      		</NavItem>
						</IndexLinkContainer>
				      	<LinkContainer to={{ pathname: '/about', query: { key: 'value' } }}>
				      		<NavItem eventKey={2}>
								About	  
				      		</NavItem>
						</LinkContainer>
				      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}>Action</MenuItem>
				        <MenuItem eventKey={3.2}>Another action</MenuItem>
				        <MenuItem eventKey={3.3}>Something else here</MenuItem>
				        <MenuItem divider />
				        <MenuItem eventKey={3.3}>Separated link</MenuItem>
				      </NavDropdown>
				    </Nav>
				</Navbar>
				<div className="container">
					{this.props.children}
				</div>

			</div>
		)
	}
}

export default App