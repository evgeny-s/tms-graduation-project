import React from 'react';
import Map from '../map'
import './panel.css'

function Panel() {
    return (
        <div className="panel col-8">
            <h2 className="game-name col-12">Dungeon Crawler Game</h2>
            <Map/>
        </div>
    );
}

export default Panel;