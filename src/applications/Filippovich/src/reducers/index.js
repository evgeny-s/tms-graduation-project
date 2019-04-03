import {combineReducers} from 'redux';

import games from './gamesReducer';
import moves from './movesReducer';

export default combineReducers({games, moves});

