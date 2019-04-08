import {combineReducers} from 'redux'

import game from './game'
import gameSetting from './gameSetting'

export default combineReducers({
    game,
    gameSetting
})