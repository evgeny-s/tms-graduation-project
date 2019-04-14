import {combineReducers} from 'redux';

import control from './controlReducer';
import form from './formReducer';

export default combineReducers({
    control,
    form
})