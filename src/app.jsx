
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/Layout';
import Intro from './components/Intro';
import ContactDetails from './components/ContactDetails';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="/intro" component={Intro}></Route>
			<Route path="/contact-details" component={ContactDetails}></Route>
		</Route>
	</Router>, 
	app
);
