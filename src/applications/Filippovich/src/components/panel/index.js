import React from 'react';
import Map from '../map';
import rules from '../../consts/rules';
import './panel.css';

function Panel() {
    return (
        <div className="panel col-8">
            <h1 className="game-name col-12">Dungeon Warriors Game</h1>
            <h6 className='log'>Действия игрока</h6>
            <Map/>
            <pre className='game-rules col-12'>{rules.Level_1}</pre>

        </div>
    );
}

export default Panel;