import {connect} from 'react-redux';
import App from '../components/App.js';
import {getLatLongTimeService} from '../services/getLatLongTimeService.js'
import {getAstronautsService} from '../services/getAstronautsService.js'

const mapStateToProps = (state) => ({
    latitude: state.latitude,
    longitude: state.longitude,
    timestamp: state.timestamp,
    numberOfPeople: state.numberOfPeople,
    people: state.people,
});

const mapDispatchToProps = (dispatch) => ({
        getLatLongTime: (data) => dispatch(
            async (dispatch) => {
                dispatch (await getLatLongTimeService(data)); 
            }),
        getAstronauts: (data) => dispatch(
            async (dispatch) => {
                dispatch (await getAstronautsService(data)); 
            }),

});  


export default connect(mapStateToProps, mapDispatchToProps)(App);

