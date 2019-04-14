import React from 'react';
import InputRange from "../GameSetting/InputRange";
import PropTypes from "prop-types";

const PlayerStatistic = ({map, gold, silver, bomb, level}) => (
    <section className='player-stat'>
        <h3>Player Stat</h3>
        <ul>
            <li>Level: {level}</li>
            <li>Ammo: {bomb}</li>
            <li>Silver: {silver}/{Math.floor(map.length / 20) * 5}</li>
            <li>Gold: {gold}/{Math.floor(map.length / 20) * 2}</li>
        </ul>
    </section>
);

InputRange.propTypes = {
    map: PropTypes.array,
    gold: PropTypes.number,
    silver: PropTypes.number,
    bomb: PropTypes.number,
    level: PropTypes.number,
};

export default PlayerStatistic