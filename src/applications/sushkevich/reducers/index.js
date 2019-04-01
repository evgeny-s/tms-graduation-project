import {combineReducers} from 'redux';

import common from './commonReducer';
import game from './gameReducer';
import stats from './playerStatsReducer';
import notifications from './notificationsReducer';

export default combineReducers({game, stats, common, notifications});