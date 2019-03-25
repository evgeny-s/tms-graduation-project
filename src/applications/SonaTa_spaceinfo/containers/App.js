import {connect} from 'react-redux';
import App from '../components/App.js';


const mapStateToProps = (state) => ({
    latitude: state.latitude,
    longitude: state.longitude,
    timestamp: state.timestamp,
});

const mapDispatchToProps = (dispatch) => ({
        resolvedGetData: (data) => dispatch(
            (dispatch) => {
                return fetch('http://api.open-notify.org/iss-now.json')
                    .then(response => response.json())
                    .then(json => dispatch({
                        type: 'RESOLVED_GET_DATA',
                        payload: {
                            latitude: json.iss_position.latitude,
                            longitude: json.iss_position.longitude,
                            timestamp: json.timestamp
                        }
                    }))
            })

});


export default connect(mapStateToProps, mapDispatchToProps)(App);




