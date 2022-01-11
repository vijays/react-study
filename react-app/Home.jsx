import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...', 
         dataforkey: 
         [
            {
               component: 'First...',
               id: 1
            },
				
            {
               component: 'Second...',
               id: 2
            },
				
            {
               component: 'Third...',
               id: 3
            }
         ]
      }

      this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
      this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <h1>Home...</h1>
                <input type = "text" value = {this.state.data} 
                    onChange = {this.updateState} />
                <h4>{this.state.data}</h4>
                            <div>
               {this.state.dataforkey.map(
                   (dynamicComponent, i) => <Content key = {i} componentData = {dynamicComponent}/>)}
            </div>
 
            </div>
        )
    }
}

export class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}
