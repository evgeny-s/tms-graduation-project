import React from 'react';
import InputRange from "../GameSetting/InputRange";
import PropTypes from "prop-types";
import C from '../../constans/Reducers'

const TaskLevel = ({level, map, gold, silver}) => {
    let message, progressBar;

    switch (level) {
        case C.FIRST_LEVEL:
            message = 'Level 1: collect all silver';
            progressBar = <progress max={Math.floor(map.length/20 * 5)} value={silver}/>;
            break;
        case C.SECOND_LEVEL:
            message = 'Level 2: collect all gold';
            progressBar = <progress max={Math.floor(map.length/20 * 2)} value={gold}/>;
            break;
        case C.THIRD_LEVEL:
            message = 'Level 3: kill boss';
            progressBar = null;
            break;
        default:
            message = progressBar = null;
    }

    return(
        <div className='task-status'>
            <h2>{message}</h2>
            {progressBar}
        </div>
    )
};

InputRange.propTypes = {
    map: PropTypes.array,
    level: PropTypes.number,
    gold: PropTypes.number,
    silver: PropTypes.number,
};

export default TaskLevel;