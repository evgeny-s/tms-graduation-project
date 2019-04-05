import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './src/reducers';
import './app.css';
import withHeader from './../../hocs/withHeader';
import App from './App'
import highestScoreSaga from './src/sagas/highestScoreSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(highestScoreSaga);

function FilippovichGame() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default withHeader(FilippovichGame);