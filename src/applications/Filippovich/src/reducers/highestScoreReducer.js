import update from 'immutability-helper';

const initialState = {

};

function HighestScoreReducer(state = initialState, action)
{
    switch (action.type) {
        case '':
            return state;
        default:
            return state;

    }
}

export default HighestScoreReducer;

// generatethis.map(data){
//     return fetch('http://localhost:3005/this.map', {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//         .then((res) => res.json())
//
// }