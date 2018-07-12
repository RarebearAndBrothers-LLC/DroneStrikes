import React, { Component } from 'react';
import './App.css'
// import backupData from './data'
import DroneStrikeList from './Components/DroneStrikeList';
import DroneStrikeDisplay from './Components/DroneStrikeDisplay';



class App extends Component {
// Update state based on handleChange not on submit 
  state = {
    droneStrikes: [],
    selectedStrike: "",
    searchQuery: "",
    newDrone: {
      country: "",
      narrative: "",
      date: "",
      deaths: "",
      injuries: "",
      civilians: "", 
      children: "", 
      link: "", 
    }
  }


  componentDidMount(){
    var url = "api.dronestre.am/data"
    fetch(`https://${url}`).then(res=>res.json()).then( data => this.setState({droneStrikes: data.strike}))
  }
 

  handleClick = (strike) => {
    this.setState({
      selectedStrike: strike
    })
  }

  handleChange = (e, input) => {
    console.log("in handleChange", input)
    this.setState({
      searchQuery: input
    },()=>console.log("search", this.state.searchQuery))
  }

  filteredList = () => {
    return this.state.droneStrikes.filter(s =>  s.country.includes(this.state.searchQuery) || s.date.includes(this.state.searchQuery))
  }


  handleNewDroneInputs = (e, value) => {
    
    this.setState({ 
      newDrone: {
      ...this.state.newDrone, 
      [e.target.name]: value
    }
      
    }, ()=>console.log(this.state.newDrone))

  }

  handleStrikeReport = (e, value) => {

      e.preventDefault()
      
    let config = {
      body: JSON.stringify(this.state.newDrone),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    }

    fetch('http://localhost:4000/drones', config).then(response => response.json()).then( data => this.setState({
       droneStrikes: [this.state.newDrone, ...this.state.droneStrikes]
    }, ()=>console.log(this.state)))


  }

  render() {
    return (
      <div className="app">
        <div className="list-container">
          <DroneStrikeList droneStrikes={this.state.droneStrikes} handleClick={this.handleClick} handleChange={this.handleChange} searchQuery={this.state.searchQuery} filteredList={this.filteredList()}/> 
        </div>
        <div className="view-container">
          <DroneStrikeDisplay strike={this.state.selectedStrike} handleStrikeReport={this.handleStrikeReport} newDrone={this.state.newDrone} handleNewDroneInputs={this.handleNewDroneInputs}/>
        </div>
      </div>
    );
  }
}

export default App;
