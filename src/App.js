import React, { Component } from 'react';
import './App.css'
import DroneStrikeList from './Components/DroneStrikeList';
import DroneStrikeDisplay from './Components/DroneStrikeDisplay';
import axios from 'axios';



class App extends Component {
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
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://api.dronestre.am/data"
    axios.get(proxyurl + url).then(res => res).then(data=> this.setState({droneStrikes: data.data.strike}))
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
