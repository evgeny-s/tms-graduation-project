import React from 'react';
import mapItemTypes from '../consts/mapItemTypes';

const PlayerStats = (props) => {
    return (
        <div className="stats-bar">
            <h3>Player Stats</h3>
            <ul>
                {
                    Object.keys(props.playerStats).map((stat, i) => {
                        return <li key={i}>{stat}: {props.playerStats[stat]} {(stat === mapItemTypes.CERTIFICATE || stat === mapItemTypes.SKILL) && `/${props.mapUnits[stat].length}`}</li> // ВОПРОС! Как бы вытянуть из констант строку?
                    })
                }
            </ul>
        </div>
    )
};

export default PlayerStats;