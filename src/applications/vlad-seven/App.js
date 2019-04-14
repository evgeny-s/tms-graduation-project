import React from 'react';
import GameSetting from './containers/GameSetting'
import Game from './containers/Game'
import {connect} from 'react-redux'
import './App.scss'

const App = ({start}) => {
    return (
        <div id='game'>
            {start ? <Game/> : <GameSetting/>}
        </div>
    )

};

const mapStoreToProps = state => ({
  start: state.gameSetting.start
});

export default connect(mapStoreToProps)(App)