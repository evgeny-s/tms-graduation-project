import {combineReducers} from 'redux';

import common from './commonReducer';
import game from './gameReducer';
import stats from './playerStatsReducer';

export default combineReducers({game, stats, common});