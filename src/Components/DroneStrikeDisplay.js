import React from 'react';

const DroneStrikeDisplay = (props) => {
    return(
        <div class='col-md-8'>
        <h2>Strike Detail</h2>
        <div id="beer-detail">
        <h1>{props.strike.narrative}</h1>
        </div>
      </div>
    )
}

export default DroneStrikeDisplay ; 