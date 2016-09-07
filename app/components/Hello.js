import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
 
class HelloWorld extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {name: ['loading...']};
	}

	componentWillMount() {
		$.get('https://api.github.com/users/rizkiandrianto/repos').done(
			(result)=> {
				var name = [];
				$.each(result, (x, y) => {
					name.push(y.name)
				})
				this.setState({
					name: name
				})
			}
		);
	}

	render() {
		return (
			<div>
				<ul>
		        	{this.state.name.map((value, index)=>{
		        		return (<li key={index}>{value}</li>)
		        	})}
				</ul>
		    </div>
		)
	}
}
 
export default HelloWorld;