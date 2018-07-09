import React from 'react';
import Map from './Map'


const DroneStrikeDisplay = (props) => {

    let formatDate = () => {
        if(props.strike.date){
            let longDate = props.strike.date;
            let date = longDate.split("T")[0];
        return date}
    }
    
    return(
        (props.strike !== "") ? 
        <div className='col-md-8'>
            <h1>Strike Details</h1>
            <div>
                <h3>{formatDate()} </h3>
                <h2>{props.strike.narrative}</h2>
                <ul>
                    <h3>Deaths: {props.strike.deaths}</h3>
                    {(props.strike.injuries !== "") ? <h3>Injuries: {props.strike.injuries}</h3> : <h3>No reported Injuries</h3>}
                    {(props.strike.civilians !== "") ? <h3>Civilians: {props.strike.civilians}</h3> : <h3>No confimred civilian casualties</h3>}
                    {(props.strike.children !== "") ? <h3>Children: {props.strike.children}</h3> : <h3>No confimred children casualties</h3>}
                </ul>
            <Map lat={props.strike.lat} lon={props.strike.lon}/>
            
            <h2> Report a Strike </h2>
            <form onSubmit={(event)=>props.handleStrikeReport(event)}>
                <ul>   
                    Country:  <input type="text" name="country" /> <br/> <br/>
                    Date:     <input type="date" name="date" /> <br/> <br/>
                    Narrative: <textarea type="text field" name="narrative" /> <br/> <br/>
                    Deaths:  <input type="text" name="deaths" /> <br/> <br/>
                    Injuries:  <input type="text" name="injuries" /> <br/> <br/>
                    Civilians Killed:  <input type="text" name="civilians" /> <br/> <br/>
                    Children Killed:  <input type="text" name="children" />  <br/> 
                    <input type="submit" value="Report Drone Strike" />
                </ul>
            </form>
        </div>
 
      </div> : null
    )
}

export default DroneStrikeDisplay ; 