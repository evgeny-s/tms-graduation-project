import React from 'react';
import GameSetting from './containers/GameSetting'
import Game from './containers/Game'
import {connect} from 'react-redux'
import './index.scss'

const App = ({start}) => {
    return (
        <section id='task-seven'>
            {start ? <Game/> : <GameSetting/>}
        </section>
    )

};

const mapStoreToProps = state => ({
  start: state.gameSetting.start
});

export default connect(mapStoreToProps)(App)