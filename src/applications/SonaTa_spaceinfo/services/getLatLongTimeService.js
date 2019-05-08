
const getLatLongTimeService = function(data){
    return fetch('http://api.open-notify.org/iss-now.json')
                    .then(response => response.json())
                    .then(json => {return {
                        type: 'CURRENT_LOCATION',
                        payload: {
                            latitude: json.iss_position.latitude,
                            longitude: json.iss_position.longitude,
                            timestamp: json.timestamp,
                        }
                    }})                   
} 


export {getLatLongTimeService};

