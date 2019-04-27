import React from 'react';

function Table(props){
    return (
       <table cellPadding="2" cellspacing="5" style={{width:"100vh",textAlign:"center",backgroundColor:"rgba(64, 77, 96,.5)", border:"2px solid white"}}> 
           <tbody>
                <tr> 
                    <th>Count</th> 
                    <th>Latitude</th> 
                    <th>Longitude</th> 
                    <th>Unix Time</th> 
                    <th>Natural Time</th> 
                    <th>Velocity (km/h)</th> 
                    <th>Velocity (mph)</th> 
                </tr>
                {props.value}
            </tbody>  
        </table>
        )
}

export default Table;