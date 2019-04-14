import React from 'react';
import LatLong from './LatLong.js';
import Timestamp from './Timestamp.js';
import Velocity from './Velocity.js';
import {AstronautsCount, Astronauts} from './Astronauts.js';
import space from './space.jpg';


class App extends React.Component {
  
    componentWillMount() {
        setInterval(() => {
            this.props.resolvedGetData()
        }, 1000);
        
      this.props.getAstronauts();
         
    }
   
    time(){
	   const unix = this.props.timestamp;
	   const hours = Math.floor(unix % 86400 / 3600).toString();
	   const min = Math.floor(unix % 86400 % 3600 / 60).toString();
	   const sec = Math.floor(unix % 86400 % 3600 % 60).toString();
	   const h = hours.length < 2 ? 0 + hours : hours;
	   const m = min.length < 2 ? 0 + min : min;
	   const s = sec.length < 2 ? 0 + sec : sec;

	   return h + ':' + m + ':' + s;
    }
    
   people(){ if(this.props.people){
       return this.props.people.map((per)=>{return <li key={per.toString()}>{per}</li>})}
   }
    
    render(){
        const page={ backgroundImage: "url(" + space + ")", backgroundPosition: "center", backgroundSize: "cover", width:"1110px", height:"550px",color:"yellow"}
        
        return (
            <div style={page}>
                <div style={{float:"right"}}>
                    <AstronautsCount value = {this.props.numberOfPeople} />
                    <Astronauts person = {this.people()} />
                </div>
                        
                <p style={{color:"yellow", fontSize:"25px", margin:"20px"}}>Current Data on the ISS:</p>
                <LatLong text = "Current Latitude:" value={this.props.latitude} />
                <LatLong text = "Current Longitude:" value={this.props.longitude}/>
                <Timestamp text = "Current Timestamp(unix):" value={this.props.timestamp}/>
                <Timestamp text = "Current Timestamp(natural):" value={this.time()}/>
            
                {/*<Velocity />*/}
            </div>
        )
      
    }
    
   
   
}

export default App;