import React from 'react';
import Hello from '../components/Hello';
import World from '../components/World';
 
class Index extends React.Component {
  render() {
    return (
    	<div>
    		<h1>Home</h1>
    		<Hello />
    	</div>
    )
  }
}
 
export default Index;