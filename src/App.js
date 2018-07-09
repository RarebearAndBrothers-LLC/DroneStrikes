import React, { Component } from 'react';
import './App.css'
// import backupData from './data'
import DroneStrikeList from './Components/DroneStrikeList';
import DroneStrikeDisplay from './Components/DroneStrikeDisplay';



class App extends Component {

  state = {
    droneStrikes: [],
    selectedStrike: "",
    searchQuery: ""
  }


  componentDidMount(){
    var url = "api.dronestre.am/data"
    fetch(`https://${url}`).then(res=>res.json()).then( data => this.setState({droneStrikes: data.strike}, ()=> console.log("strike arr", this.state)))
  }
 

  handleClick = (strike) => {
    console.log(strike)
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
          <DroneStrikeDisplay strike={this.state.selectedStrike}/>
        </div>
      </div>
    );
  }
}

export default App;
