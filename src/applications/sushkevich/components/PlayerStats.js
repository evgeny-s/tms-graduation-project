import React from 'react';

const PlayerStats = (props) => {
    return (
        <div className="stats-bar">
            <h3>Player Stats</h3>
            <ul>
                {
                    Object.keys(props.playerStats).map((stat, i) => {
                        return <li key={i}>{stat}: {props.playerStats[stat]}</li>
                    })
                }
            </ul>
        </div>
    )
};

export default PlayerStats;