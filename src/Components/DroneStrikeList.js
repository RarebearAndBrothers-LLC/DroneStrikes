import React from 'react';
import DroneStrike from './DroneStrike';


const DroneStrikeList = (props) => {

    const mapStrikes = () => {
      
        return props.droneStrikes.map((s)=> {
            return <DroneStrike key={s.number}  strike={s} handleClick={props.handleClick}/> 
        })
    }

  return (
    
    <div class='col-md-4'>
      <ul class="list-group" id="list-group">
      {mapStrikes()}
      </ul>
    </div>
  )
}
export default DroneStrikeList;