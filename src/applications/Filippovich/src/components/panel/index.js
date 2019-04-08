import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Map from '../map';
import GameLog from '../gameLog';
import './panel.css';

const mapStateToProps = state => ({
    ruleText: state.games.ruleText,
});

function Panel({ruleText}) {
    return (
        <div className="panel col-8">
            <GameLog/>
            <Map/>
            <pre className='game-rules col-12'>{ruleText}</pre>
        </div>
    );
}

Panel.propTypes = {
    ruleText: PropTypes.string,
};

export default connect(mapStateToProps)(Panel);