const getAstronautsService = function(data){
    return fetch('http://api.open-notify.org/astros.json')
                    .then(response => response.json())
                    .then(json => {return {
                        type: 'PEOPLE_IN_SPACE',
                        payload: {
                            numberOfPeople: json.number,
                            people: json.people.map(element =>{return element.name})
                        }
                    }})                    
} 

export {getAstronautsService};