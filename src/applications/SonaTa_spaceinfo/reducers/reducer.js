const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'RESOLVED_GET_DATA':
            return {
                ...state,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                timestamp: action.payload.timestamp
            };
        default:
            return 'Sorry, try again later'
    }
}

export default reducer;