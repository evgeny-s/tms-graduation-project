import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import reducer from './reducers/index';

import withHeader from './../../hocs/withHeader';
import App from './App';
import './styles/style.css';

const store = createStore(reducer, applyMiddleware(logger));
// console.log(store.getState());

function Game() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

export default withHeader(Game);