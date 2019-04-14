import React from 'react';

function AstronautsCount(props){
     return (
        <div style={{color:"#75aaf9", fontSize:"25px", margin:"10px", textAlign:"center"}}>At this moment there are {props.value} humans in space. <br/>They are:</div>
         )
    }


function Astronauts(props){
     return (
        <ul style={{color:"#6492d6", fontSize:"15px", marginLeft:"250px"}}>{props.person}</ul>
        )
   }

export {AstronautsCount, Astronauts};