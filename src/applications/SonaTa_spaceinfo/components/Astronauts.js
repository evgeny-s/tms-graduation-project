import React from 'react';

function AstronautsCount(props){
     return (
        <div style={{color:"#75aaf9", fontSize:"25px", margin:"10px",float:"right"}}>At this moment there are {props.value} humans in space. They are:</div>
         )
    }


function Astronauts(props){
   
     return (
            <li style={{color:"#6492d6", fontSize:"15px", margin:"10px", float:"right"}}>{props.value}</li>
        );
}


export {AstronautsCount, Astronauts};