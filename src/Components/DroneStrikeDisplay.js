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
            </div>
            <div id="mapDiv"> 
                        <Map lat={props.strike.lat} lon={props.strike.lon}/>
            </div>
         </div> 
         : 
         null
    )
}

export default DroneStrikeDisplay ; 
