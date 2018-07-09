import React from 'react';

const DroneStrikeDisplay = (props) => {

    let formatDate = () => {
        if(props.strike.date){
        let longDate = props.strike.date;
        let date = longDate.split("T")[0];
        return date}
    }
    
    return(
        (props.strike !== "") ? 
        <div class='col-md-8'>
            <h1>Strike Details</h1>
        <div id="beer-detail">
            <h3>{formatDate()} </h3>
            <h2>{props.strike.narrative}</h2>
            <ul>
                <h3>Deaths: {props.strike.deaths}</h3>
                {(props.strike.injuries !== "") ? <h3>Injuries: {props.strike.injuries}</h3> : <h3>No reported Injuries</h3>}
                {(props.strike.civilians !== "") ? <h3>Civilians: {props.strike.civilians}</h3> : <h3>No confimred civilian casualties</h3>}
                {(props.strike.children !== "") ? <h3>Children: {props.strike.children}</h3> : <h3>No confimred children casualties</h3>}
                
            </ul>
        </div>
      </div> : null
    )
}

export default DroneStrikeDisplay ; 