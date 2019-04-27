    
import update from 'immutability-helper';
 
//let initialstate={records:[]}

const reducer = (state={}, action) => {
    switch (action.type) { 
        /*   
          case 'CURRENT_LOCATION':
            return {
                ...state,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                timestamp: action.payload.timestamp,
                records:[action.payload.latitude,action.payload.longitude,action.payload.timestamp]   
            };  
         */   
    /*        
       case 'CURRENT_LOCATION':
         
            const newRecords = update(state.records, {
        records: {$push: [action.payload]}
      })
            return update(state, {records:newRecords}) 
            
            //return update(state, {$merge:{latitude: action.payload.latitude, longitude: action.payload.longitude, timestamp: //action.payload.timestamp}, records:{$push: [action.payload]}})  
    */
    
        case 'CURRENT_LOCATION':
            return {
                ...state,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                timestamp: action.payload.timestamp,
                
            }; 
        case 'PEOPLE_IN_SPACE':
           
            return {
                ...state,
                people: action.payload.people,
                numberOfPeople: action.payload.numberOfPeople
            };
        
        default:
            return 'Sorry, try again later'
    }
}

export default reducer;

