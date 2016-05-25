import React from 'react';

export default class Todo extends React.Component{
    
    constructor(props){
        super();
    }
    
    render() {
        const id = this.props.id;
        const text = this.props.text;
        const completed = this.props.completed;

        return (
            <div>
                <br />
                {id}-
                {text}-
                {completed}
            </div>
        )
    }
}