import React, { Component } from 'react';
import './App.css'
// import backupData from './data'
import DroneStrikeList from './Components/DroneStrikeList';
import DroneStrikeDisplay from './Components/DroneStrikeDisplay';



class App extends Component {

  state = {
    droneStrikes: [],
    selectedStrike: "",
    searchQuery: "",
    country: "",
    narrative: "",
    date: "",
    deaths: "",
    injuries: "",
    civilians: "", 
    children: "", 
    link: "", 
  }


  componentDidMount(){
    var url = "api.dronestre.am/data"
    fetch(`https://${url}`).then(res=>res.json()).then( data => this.setState({droneStrikes: data.strike}))
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

  handleStrikeReport = (e) => {
    e.preventDefault()
    let country = e.target.country.value
    let narrative = e.target.narrative.value
    let date = e.target.date.value
    let deaths = e.target.deaths.value 
    let injuries = e.target.injuries.value 
    let civilians = e.target.civilians.value
    let children = e.target.children.value
    let link = e.target.link.value
      this.setState({
        country: country,
        narrative: narrative,
        date: date,
        deaths: deaths,
        injuries: injuries,
        civilians: civilians,
        children: children,
        link: link
      }, ()=> console.log(this.state))



  }

  render() {
    return (
      <div className="app">
        <div className="list-container">
          <DroneStrikeList droneStrikes={this.state.droneStrikes} handleClick={this.handleClick} handleChange={this.handleChange} searchQuery={this.state.searchQuery} filteredList={this.filteredList()}/> 
        </div>
        <div className="view-container">
          <DroneStrikeDisplay strike={this.state.selectedStrike} handleStrikeReport={this.handleStrikeReport}/>
        </div>
      </div>
    );
  }
}

export default App;
