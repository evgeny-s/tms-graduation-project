import {combineReducers} from 'redux';

import common from './commonReducer';
import games from './gamesReducer';
import moves from './movesReducer';
import settings from './settingsReducer';

export default combineReducers({common, games, moves, settings});

