import {connect} from 'react-redux';
import App from '../components/App.js';


const mapStateToProps = (state) => ({
    latitude: state.latitude,
    longitude: state.longitude,
    timestamp: state.timestamp,
    numberOfPeople: state.numberOfPeople,
    people: state.people,
});

const mapDispatchToProps = (dispatch) => ({
        resolvedGetData: (data) => dispatch(
            (dispatch) => {
                return fetch('http://api.open-notify.org/iss-now.json')
                    .then(response => response.json())
                    .then(json => dispatch({
                        type: 'CURRENT_LOCATION',
                        payload: {
                            latitude: json.iss_position.latitude,
                            longitude: json.iss_position.longitude,
                            timestamp: json.timestamp,
                        }
                    }))
            }),
        getAstronauts: (data) => dispatch(
            (dispatch) => {
                return fetch('http://api.open-notify.org/astros.json')
                    .then(response => response.json())
                    .then(json => dispatch({
                        type: 'PEOPLE_IN_SPACE',
                        payload: {
                            numberOfPeople: json.number,
                            people: json.people.map(element =>{return element.name})
                        }
                    }))
            }),

});


export default connect(mapStateToProps, mapDispatchToProps)(App);




