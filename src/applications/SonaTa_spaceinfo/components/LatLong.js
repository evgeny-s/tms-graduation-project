import React from 'react';



function LatLong(props){
         
    const infoView={ width: "370px", height:"40px", backgroundColor:"rgba(64, 77, 96,.5)", color:"yellow", fontSize:"20px", marginBottom:"5px", marginLeft:"15px"}
     return (
        <div style={infoView}>{props.text} {props.value}</div>
         )
    }

export default LatLong;