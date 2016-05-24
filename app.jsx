
import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro';

class App extends React.Component {
	render() {
		return (
			<div>
				Hello World!
				<Intro name = "Vijay"/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
