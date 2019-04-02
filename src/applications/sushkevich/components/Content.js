import React from 'react';

import viewsConsts from '../consts/views';

import Description from '../containers/Description';
import Game from './Game';
import PlayerStats from '../containers/PlayerStats';
import Result from '../containers/Result';
import Test from './Test';

const Content = (props) => {
    return (
        <div className="content">
            <PlayerStats/>
            {props.view === viewsConsts.DESCRIPTION && <Description/>}
            {props.view === viewsConsts.GAME && <Game/>}
            {props.view === viewsConsts.RESULT && <Result/>}
            <Test/>
        </div>
    )
};

export default Content;