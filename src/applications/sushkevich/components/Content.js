import React from 'react';

import viewsConsts from '../consts/views';

import Description from '../containers/Description';
import Game from './Game';
import Stats from '../containers/Stats';
import Options from '../components/Options';
import Result from '../containers/Result';

const Content = (props) => {
    return (
        <div className="content">
            <div className="controls-bar">
                <Stats/>
                {props.view === viewsConsts.GAME && <Options/>}
            </div>
            {props.view === viewsConsts.DESCRIPTION && <Description/>}
            {props.view === viewsConsts.GAME && <Game/>}
            {props.view === viewsConsts.RESULT && <Result/>}
        </div>
    )
};

export default Content;