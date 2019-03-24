import React from 'react';

import viewsConsts from '../consts/views';

import Description from '../containers/Description';
import Game from './Game';
import PlayerStats from '../containers/PlayerStats';

const Content = (props) => {
    return (
        <div className="content">
            <PlayerStats/>
            { props.view === viewsConsts.DESCRIPTION && <Description/>}
            { props.view === viewsConsts.GAME && <Game/>}
        </div>
    )
};

export default Content;