
const reducer = (state={}, action) => {
    switch (action.type) { 
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
            return state;
    }
}

export default reducer;

