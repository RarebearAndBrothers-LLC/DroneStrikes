import React from 'react';




const DroneStrike = (props) => {

   let formatDate = () => {
        let longDate = props.strike.date;
        let date = longDate.split("T")[0];
        return date
    }

    return (
        <div onClick={()=>props.handleClick(props.strike)}>
           <h4>{props.strike.country} | {formatDate()}</h4>
        </div>
    )
}
export default DroneStrike;