import React from 'react';
import Hello from '../components/Hello';
import World from '../components/World';
 
class Index extends React.Component {
  render() {
    return (
    	<div>
    		<h1>Index</h1>
    		<p> <Hello /> <World /> </p>
    	</div>
    )
  }
}
 
export default Index;