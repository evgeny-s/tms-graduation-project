import React from 'react';
import LatLong from './LatLong.js';
import Timestamp from './Timestamp.js';
import Velocity from './Velocity.js';
import {AstronautsCount, Astronauts} from './Astronauts.js';
import space from './space.jpg';
import Table from './Table.js';


const records=[];

class App extends React.Component {
  
    componentWillMount() {
        setInterval(() => {
            this.props.resolvedGetData() 
        }, 5000);
        
      this.props.getAstronauts();
        
    }

     time(unix){
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

                                    
    tab(){
   
      if(this.props.longitude)  {  
        records.unshift(this.props);
        }
      console.log(records); 
  
      return (
        <React.Fragment>   
            {records.map((elem,index)=>{return (<tr style={{border:"1px solid white"}} key={elem.timestamp}><td>{records.length-index}</td><td>{elem.latitude}</td><td>{elem.longitude}</td><td>{elem.timestamp}</td><td>{this.time(elem.timestamp)}</td><td>*</td><td>*</td></tr>)})} 
        </React.Fragment>
       )                 
    }      
    

    render(){
        const page={ backgroundImage: "url(" + space + ")", backgroundPosition: "center", backgroundSize: "cover", width:"1110px", height:"550px",color:"yellow"}
        
        return (
            <div style={page}>
                <div style={{float:"right"}}>
                    <AstronautsCount value = {this.props.numberOfPeople} />
                    <Astronauts person = {this.people()} />
                </div>
                <div>        
                    <p style={{color:"yellow", fontSize:"25px", margin:"20px"}}>Current Data on the ISS:</p>
                    <LatLong text = "Current Latitude:" value={this.props.latitude} />
                    <LatLong text = "Current Longitude:" value={this.props.longitude}/>
                    <Timestamp text = "Current Timestamp(unix):" value={this.props.timestamp}/>
                    <Timestamp text = "Current Timestamp(natural):" value={this.time(this.props.timestamp)}/>
                    {/*<Velocity />*/}
                </div>
                <div style={{maxHeight:"205px", overflow: "auto", marginLeft:"150px", marginTop:"80px"}}>
                    <Table value={this.tab()}/>
               </div>
            </div>
        )
      
    }
      
}
  


export default App;