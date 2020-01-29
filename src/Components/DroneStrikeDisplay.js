import React from 'react';
import Map from './Map';



const DroneStrikeDisplay = (props) => {

    let formatDate = () => {
        if(props.strike.date){
            let longDate = props.strike.date;
            let date = longDate.split("T")[0];
        return date}
    }

    let displayDeathImages = () => {
        let arr = []
        let civilianDeaths;
        
        if(props.strike.civilians === "" || props.strike.civilians === "Unknown"){
            civilianDeaths = 0 
        } else {
            civilianDeaths = parseInt(props.strike.civilians)
        }
    

        for(let i=0; i < parseInt(props.strike.deaths); i++){
            if(civilianDeaths <= i){
                arr.push(<div className="deaths"><img src={"https://storage.needpix.com/thumbs/user-296686_1280.png"} height="20"/></div>)
            } else {
                arr.push(<div className="deaths"><img src={"https://storage.needpix.com/rsynced_images/buddy-303603_1280.png"} height="20"/></div>)
            }
        }
        return arr 
    }

  


    
    return(
        (props.strike !== "") ? 
        <div className='strikeDisplay'>
            <div className='strikeInfo'>
                <h1>Strike Details</h1>
                <div>
                    <h3>{formatDate()} </h3>
                    <h2>{props.strike.narrative}</h2>
                    <ul>
                        <div>
                            <h3>Deaths: {props.strike.deaths}</h3>
                            <ul>
                                {displayDeathImages()}
                            </ul>
                        </div>
                        {(props.strike.injuries !== "") ? <h3>Injuries: {props.strike.injuries}</h3> : <h3>No reported Injuries</h3>}
                        {(props.strike.civilians !== "") ? <h3>Civilians: {props.strike.civilians}</h3> : <h3>No confimred civilian casualties</h3>}
                        {(props.strike.children !== "") ? <h3>Children: {props.strike.children}</h3> : <h3>No confimred children casualties</h3>}
                    </ul>
            </div>

            <Map lat={props.strike.lat} lon={props.strike.lon}/>
            </div>
{/*             
            <h2> Report a Strike </h2>
            <form 
            onSubmit={(event)=>props.handleStrikeReport(event, event.target.value)} 
            onChange={(event)=>props.handleNewDroneInputs(event, event.target.value)}>
                <ul>   
                    Country:  <input type="text" name="country" value={props.newDrone.country} /> <br/> <br/>
                    Date:     <input type="date" name="date" value={props.newDrone.date} /> <br/> <br/>
                    Narrative: <textarea type="text field" name="narrative" value={props.newDrone.narrative} /> <br/> <br/>
                    Deaths:  <input type="text" name="deaths" value={props.newDrone.deaths} /> <br/> <br/>
                    Injuries:  <input type="text" name="injuries" value={props.newDrone.injuries} /> <br/> <br/>
                    Civilians Killed:  <input type="text" name="civilians" value={props.newDrone.civilians} /> <br/> <br/>
                    Children Killed:  <input type="text" name="children" value={props.newDrone.children} />  <br/>
                    Report Source Link:  <input type="text" name="link" value={props.newDrone.link} />  <br/>  <br/>
                    <input type="submit" value="Report Drone Strike" />
                </ul>
            </form> */}
        
 
      </div> : null
    )
}

export default DroneStrikeDisplay ; 