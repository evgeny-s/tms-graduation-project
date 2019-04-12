import React from 'react';

{/*function(){

 getDistance = (lat1, lon1, lat2, lon2) =>{
        const R = 6371 + 400;
        const deg2rad = Math.PI/180
        const dLat = deg2rad*(lat2 - lat1);
        const dLon = deg2rad*(lon2 - lon1);
           
        return R*deg2rad*Math.sqrt(Math.pow(Math.cos(lat1*deg2rad)*(lon1-lon2),2)+Math.pow(lat1-lat2,2));
    }
  
  getDistance(51.0086, 68.5654, 50.8986, 69.5397);

  const velosity = getDistance* 3600; 
} */}



function Velocity(lat1, lon1, lat2, lon2){
    
        var R = 6371 + 400;
        var deg2rad = Math.PI/180
        var lat1 =51.0086
        var lat2 =50.8986
        var lon1 =68.5654
        var lon2 =69.5397
        var dLat = deg2rad*(lat2 - lat1);
        var dLon = deg2rad*(lon2 - lon1);
        var distance= R*deg2rad*Math.sqrt(Math.pow(Math.cos(lat1*deg2rad)*(lon1-lon2),2)+Math.pow(lat1-lat2,2));  
        return (<div>{distance*3600/5}</div>)
    }
 




export default Velocity;