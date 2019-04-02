import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import highscoreSaga from './sagas/highscoreSaga';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index';

import withHeader from './../../hocs/withHeader';
import App from './App';

import './styles/fonts.css';
import './styles/icons.css';
import './styles/style.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(highscoreSaga);

function Game() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

export default withHeader(Game);