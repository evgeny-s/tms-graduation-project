import React from 'react';
import LatLong from './LatLong.js';
import Timestamp from './Timestamp.js';
import Velocity from './Velocity.js';
import {AstronautsCount, Astronauts} from './Astronauts.js';
import space from './space.jpg';



class App extends React.Component {
    constructor(props){
        super(props)
        this.time=this.time.bind(this);
 
    }

    componentWillMount() {
        setInterval(() => {
            this.props.resolvedGetData()
        }, 5000);
        
        this.props.getAstronauts()    
    }
    
   time(){
        return Math.floor(this.props.timestamp % 86400 / 3600) + ':' + Math.floor(this.props.timestamp % 86400 % 3600 / 60) + ':' + Math.floor(this.props.timestamp % 86400 % 3600 % 60);
    }
    
    render(){
        const page={ backgroundImage: "url(" + space + ")", backgroundPosition: "center", backgroundSize: "cover", width:"1110px", height:"550px",color:"yellow"}
       console.log(this.props.people);
        return (
            <div style={page}>
                
                <AstronautsCount value = {this.props.numberOfPeople} />
            
                <Astronauts value = {} />
          
               {/* <ul>
                    {this.props.people.map(per=><Astronauts key={per.toString()} value = {per} />)} 
                </ul>*/}

                          
                <p style={{color:"yellow", fontSize:"25px", margin:"20px"}}>Current Data on the ISS:</p>
                <LatLong text = "Current Latitude:" value={this.props.latitude} />
                <LatLong text = "Current Longitude:" value={this.props.longitude}/>
                <Timestamp text = "Current Timestamp(unix):" value={this.props.timestamp}/>
                <Timestamp text = "Current Timestamp(natural):" value={this.time}/>
            
                <Velocity />
            </div>
        )
      
    }
    
   
   
}

export default App;