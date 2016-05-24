
import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro';

export class App extends React.Component {
	render() {
		return (
			<div>
				Hello World!
				<Intro />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
