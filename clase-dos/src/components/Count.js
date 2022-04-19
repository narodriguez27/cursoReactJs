import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
  }
  state = {calorias:0}

  incremetar(){
    this.setState({calorias: this.state.calorias+1})
  }
  decrementar(){
    this.setState({calorias: this.state.calorias-1})

  }

  render() { 
    return ( 
    <div className="text-center">
      <h3>Calorias {this.state.calorias}</h3>
      <button className='btn btn-primary' onClick={this.incremetar.bind(this)}>+</button>
      <button className='btn btn-danger' onClick={this.decrementar.bind(this)}>-</button>
    </div>);
  }
}
 
export default Count;
