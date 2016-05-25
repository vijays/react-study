import React from 'react';
import {Link} from 'react-router';

import IntroName from './IntroName';

export default class Intro extends React.Component {
	
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
				<IntroName name={this.state.name} changeName={this.changeName.bind(this)} />
			</div>
		);
	}
}
