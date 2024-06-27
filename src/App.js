import React, { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      project: 'Lumiere',
    }
  }
  render(){
    return(
      <div>
        <h1>Iniciando projeto: {this.state.project}</h1>
      </div>
    );
  }
}

export default App;