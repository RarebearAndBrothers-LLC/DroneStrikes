import React from 'react';
import DroneStrike from './DroneStrike';


const DroneStrikeList = (props) => {

    const mapStrikes = () => {

      if(!props.searchQuery){
        return props.droneStrikes.map((s)=> {
            return <DroneStrike key={s.number}  strike={s} handleClick={props.handleClick}/> 
        });
      } else {
        console.log("DroneStrikeList",props)
        return props.filteredList.map((s)=> {
          return <DroneStrike key={s.number}  strike={s} handleClick={props.handleClick}/> 
        });
      }
    }

  

  return (
    <div>
      <div>
        <form>
          <input placeholder="Sort by Country/Date" value={props.searchQuery} onChange={(event) => props.handleChange(event, event.target.value)}/>
        </form>
      </div>
      <div className='col-md-4'>
        <ul className="list-group" id="list-group">
            {mapStrikes()}
        </ul>
      </div>
    </div>
  )
}
export default DroneStrikeList;