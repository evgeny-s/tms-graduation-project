import React from 'react';

import viewsConsts from '../consts/views';

import Description from '../containers/Description';
import Game from './Game';
import PlayerStats from '../containers/PlayerStats';
import Result from '../containers/Result';

const Content = (props) => {
    return (
        <div className="content">
            <PlayerStats/>
            {props.view === viewsConsts.DESCRIPTION && <Description/>}
            {props.view === viewsConsts.GAME && <Game/>}
            {props.view === viewsConsts.RESULT && <Result/>}
        </div>
    )
};

export default Content;