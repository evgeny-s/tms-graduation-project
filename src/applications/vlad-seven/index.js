import React from 'react';
import withHeader from '../../hocs/withHeader'
import App from './App';
import reducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducers);

const Seven = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default withHeader(Seven)

