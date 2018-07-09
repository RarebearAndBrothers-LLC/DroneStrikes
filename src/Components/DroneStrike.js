import React from 'react';




const DroneStrike = (props) => {

    return (
        <div onClick={()=>props.handleClick(props.strike)}>
           <h4>{props.strike.country}</h4>
        </div>
    )
}
export default DroneStrike;