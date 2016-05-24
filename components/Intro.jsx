import React, {Component} from 'react';

export default class Intro extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.name}!
            </div>
        );
    }
}
