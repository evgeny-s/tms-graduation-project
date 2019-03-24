import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer.js';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

function getSpaceInfo() {
  (dispatch) => {
    return fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(json => dispatch(resolvedGetData(json)))
  }
}

function resolvedGetData(data) {
  return {
    type: 'RESOLVED_GET_DATA',
    latitude: data.iss_position.latitude,
	longitude: data.iss_position.longitude,
	timestamp: data.timestamp
  }
}



export {getSpaceInfo, resolvedGetData}




