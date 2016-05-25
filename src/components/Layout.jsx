import React, {Component} from 'react';
import {Link} from 'react-router';
import Intro from './Intro';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
				<Link to="todos"><button>Todos</button></Link>
				<Link to="contact-details"><button>Contact Details</button></Link>
			</div>
		);
	}
}
