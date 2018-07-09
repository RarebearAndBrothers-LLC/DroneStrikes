import React, { Component } from 'react';
import './App.css'
// import backupData from './data'
import DroneStrikeList from './Components/DroneStrikeList';
import DroneStrikeDisplay from './Components/DroneStrikeDisplay';



class App extends Component {

  state = {
    droneStrikes: [],
    selectedStrike: "",
  }


  componentDidMount(){
    var url = "api.dronestre.am/data"
    fetch(`https://${url}`).then(res=>res.json()).then( data => this.setState({droneStrikes: data.strike}, ()=> console.log(this.state)))
  }
 

  handleClick = (strike) => {
    console.log(strike)
    this.setState({
      selectedStrike: strike
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list-container">
          <DroneStrikeList droneStrikes={this.state.droneStrikes} handleClick={this.handleClick}/> 
        </div>
        <div className="view-container">
          <DroneStrikeDisplay strike={this.state.selectedStrike}/>
        </div>
      </div>
    );
  }
}

export default App;
