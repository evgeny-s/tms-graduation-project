import React from 'react';
import withHeader from './../../hocs/withHeader';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import App from './containers/App.js'
import reducer from "./reducers/reducer";


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

class SpaceInfo extends React.Component {

    render() {
        return (
            <div>
                <Provider store={store}>
                    <App/>
                </Provider>

            </div>
        );
    }
}



export default withHeader(SpaceInfo);