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


  



  render() {
    return (
      <div className="app">
        <div className="list-container">
          <DroneStrikeList droneStrikes={this.state.droneStrikes} handleClick={this.handleClick} handleChange={this.handleChange} searchQuery={this.state.searchQuery} filteredList={this.filteredList()}/> 
        </div>
        <div className="view-container">
          <DroneStrikeDisplay strike={this.state.selectedStrike}  />
        </div>
      </div>
    );
  }
}

export default App;
