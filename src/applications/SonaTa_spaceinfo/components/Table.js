import React from 'react';

function Table(props){
    return (
       <table cellPadding="2" cellSpacing="5" className="Table"> 
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