
import React from 'react';
import ReactDOM from 'react-dom';
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
				Hello World!<p />
				<Intro name = {this.state.name} changeName={this.changeName.bind(this)}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
