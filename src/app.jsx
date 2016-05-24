
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Intro from './components/Intro';

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {name: ""};
	}
	
	changeName(name) {
		this.setState({name});
	}
	
	render() {
		return (
			<div>
				<Intro name = {this.state.name} changeName={this.changeName.bind(this)}/>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(
	<App />, 
	app
);
