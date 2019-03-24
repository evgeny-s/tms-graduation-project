const reducer = (state={}, action) => {
	switch (action.type){
		case 'RESOLVED_GET_DATA':
		return {...state, action.latitude, action.longitude, action.timestamp};
		default:
		return 'Sorry, try again later'
	}
}

export default reducer;