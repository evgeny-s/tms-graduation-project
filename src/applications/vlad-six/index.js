import React from 'react';
import withHeader from '../../hocs/withHeader'
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index';
import recipeSaga from './sagas/RecipeSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(recipeSaga);

const Six = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default withHeader(Six);