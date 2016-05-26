import React from 'react';

export default class Todo extends React.Component{
    
    constructor(props){
        super();
    }
    
    render() {
        const {
            id, 
            text, 
            completed
        } = this.props;
            
        return (
            <div>
                <br />
                {id}-
                {text}-
                {completed?"\u2714" : "\u2716"}
            </div>
        )
    }
}