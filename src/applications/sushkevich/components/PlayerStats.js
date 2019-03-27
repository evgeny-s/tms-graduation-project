import React from 'react';
import playerStatsConsts from '../consts/playerStats';
import config from '../db/config';

const PlayerStats = (props) => {
    return (
        <div className="stats-bar">
            <h3>Player Stats</h3>
            <ul>
                {
                    Object.keys(props.playerStats).map((stat, i) => {
                        return <li key={i}>
                            {stat}: {
                                stat === playerStatsConsts.CERTIFICATES || stat === playerStatsConsts.SKILLS
                                ? `${props.playerStats[stat]}/${config[stat]}`
                                : props.playerStats[stat]
                        }
                        </li>
                    })
                }
            </ul>
        </div>
    )
};

export default PlayerStats;