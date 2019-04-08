import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './gameLog.css';


const mapStateToProps = state => ({
    logText: state.games.logText,
    movesCount: state.moves.movesCount,
});

function GameLog({logText, movesCount}) {
    return (
        <div>
            <h5 className='log-header'>Действия игрока:</h5>
            <p className='log-text'>{logText}</p>
            <p className='log-movesCount'>Moves count: {movesCount}</p>
        </div>
    );
}

GameLog.propTypes = {
    logText: PropTypes.string,
    movesCount: PropTypes.number,
};

export default connect(mapStateToProps)(GameLog);