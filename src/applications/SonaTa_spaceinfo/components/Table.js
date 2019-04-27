import React from 'react';

function Table(props){
    return (
       <table style={{width:"100vh", marginLeft:"150px", marginTop:"100px"}}> 
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
                {props.values}
    {props.val}
            </tbody>  
        </table>
        )
}

export default Table;