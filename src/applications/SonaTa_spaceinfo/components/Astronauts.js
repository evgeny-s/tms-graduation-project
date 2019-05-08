import React from 'react';

function AstronautsCount(props){
     return (
        <div className="AstronautsCount">At this moment there are {props.value} humans in space. <br/>They are:</div>
     )
}


function Astronauts(props){
     return (
        <ul className="Astronauts">{props.person}</ul>
     )
}

export {AstronautsCount, Astronauts};