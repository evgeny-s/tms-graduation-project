import React from 'react';
import LatLong from './LatLong.js';
import Timestamp from './Timestamp.js';
import Velocity from './Velocity.js';
import {AstronautsCount, Astronauts} from './Astronauts.js';
import space from './space.jpg';
import Table from './Table.js';
import './App.css';

let records=[];
let obj={}; 
let record1=[];
let record2=[];

class App extends React.Component {
   
componentWillMount() {
   setTimeout(() => {
            this.props.resolvedGetData() 
        }, 0); 
    
   setInterval(() => {
            this.props.resolvedGetData() 
        }, 5000);  
        
<<<<<<< HEAD
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
=======
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

   velocity(lat1, lon1, lat2, lon2){
       var R = 6371 + 400;
        var deg2rad = Math.PI/180
        var distance= R*deg2rad*Math.sqrt(Math.pow(Math.cos(lat1*deg2rad)*(lon1-lon2),2)+Math.pow(lat1-lat2,2));  
        return distance*3600/5;
   } 
         
   records(){
        if(this.props.longitude)  {  
        records.unshift(this.props);
        }
   }    
       
   vel(){
    const rec = records.slice(1);
       
    obj.lat1=records.map((elem,i)=>elem.latitude);
    obj.lon1=records.map((elem,i)=>elem.longitude);
    obj.timestamp=records.map((elem,i)=>elem.timestamp);
    obj.lat2=rec.map(el=>el.latitude);
    obj.lon2=rec.map(el=>el.longitude);  
   }
  
    tab(){
  
    this.records();
    this.vel();  
                 
    return (
        <React.Fragment>   
            {records.map((elem,index)=>{return (<tr className="tr" key={elem.timestamp}><td>{records.length-index}</td><td>{obj.lat1[index]}</td><td>{obj.lon1[index]}</td><td>{obj.timestamp[index]}</td><td>{this.time(obj.timestamp[index])}</td><td>{Math.floor(this.velocity(obj.lat1[index], obj.lon1[index], obj.lat2[index], obj.lon2[index]))}</td><td>{Math.floor(this.velocity(obj.lat1[index], obj.lon1[index], obj.lat2[index], obj.lon2[index])/1.609344)}</td></tr>)})} 
        </React.Fragment>
       )    
   }      

   v1(){
   
    if(this.props.longitude)  {  
        record1.unshift(this.props);
        } 
    if(record1.length>1){  
        return this.velocity(record1[0].latitude, record1[0].longitude, record1[1].latitude, record1[1].longitude)    
        }
   }
     
    v2(){
   
    if(this.props.longitude)  {  
        record2.unshift(this.props);
        } 
    if(record2.length>1){  
        return this.velocity(record2[0].latitude, record2[0].longitude, record2[1].latitude, record2[1].longitude)/1.609344    
        }
   }
    render(){
        return (
            <div className="page">
                <div className="astronautsContainer">
                    <AstronautsCount value = {this.props.numberOfPeople} />
                    <Astronauts person = {this.people()} />
                </div>
                <div>        
                    <p className="pCurrentData">Current Data on the ISS:</p>
                    <LatLong text = "Current Latitude:" value={this.props.latitude} />
                    <LatLong text = "Current Longitude:" value={this.props.longitude}/>
                    <Timestamp text = "Current Timestamp (unix):" value={this.props.timestamp}/>
                    <Timestamp text = "Current Timestamp (natural):" value={this.time(this.props.timestamp)}/>
                    <Velocity text = "Estimated Velocity (km/h):" value={Math.floor(this.v1(record1))}/>
                    <Velocity text = "Estimated Velocity (mph):" value={Math.floor(this.v2(record2))}/>
                </div>
                <div className="tableContainer">
                    <Table value={this.tab()}/>
                </div>
>>>>>>> SonaTa.SpaceInfo
            </div>
        )
    } 
 }
  


export default App;