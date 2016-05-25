import React, {Component} from 'react';

export default class IntroName extends Component {
    	
	handleChange(e) {
		const name = e.target.value;
		this.props.changeName(name);
	}

    render() {
        return (
            <div>
                Welcome {this.props.name}!<br />
                <input onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}
