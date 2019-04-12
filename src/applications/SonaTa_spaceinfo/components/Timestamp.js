import React from 'react';

function Timestamp(props){
    const infoView={ width: "370px", height:"40px", backgroundColor:"rgba(64, 77, 96,.5)", color:"yellow", fontSize:"20px", marginBottom:"5px", marginLeft:"15px"}
     
    return (
        <div style={infoView}>{props.text} {props.value}</div>
         )
    }


export default Timestamp;


/*
var date = new Date(unix_timestamp*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
*/