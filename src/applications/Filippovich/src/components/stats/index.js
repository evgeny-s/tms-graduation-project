import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './stats.css'

const mapStateToProps = state => ({
    name: state.settings.inputNameValue,
    level: state.games.level,
    health: state.games.health,
    experience: state.games.experience,
    experienceLeftToCollect: state.games.experienceLeftToCollect,
    skills: state.games.skills,
    skillsLeftToCollect: state.games.skillsLeftToCollect,
    certifications: state.games.certifications,
    certificationsLeftToCollect: state.games.certificationsLeftToCollect,
    ultimate: state.games.ultimate,
    ultimateLeftToCollect: state.games.ultimateLeftToCollect,
});


function Stats({ name, level, health, experience, experienceLeftToCollect, skills, skillsLeftToCollect,
                   certifications, certificationsLeftToCollect, ultimate, ultimateLeftToCollect})
{
    return (
        <div className="user-stats col-3">
            <p className='player-header'><span className='player-name'>{name}</span> statistics:</p>
            <p>Level: {level}</p>
            <p>Health: {health}</p>
            <p>Experience: {experience}/{experienceLeftToCollect}</p>
            <p>Skills: {skills}/{skillsLeftToCollect}</p>
            <p>Certifications: {certifications}/{certificationsLeftToCollect}</p>
            <p>Ultimate skills: {ultimate}/{ultimateLeftToCollect}</p>
        </div>
    );
}

Stats.propTypes = {
    name: PropTypes.string,
    level: PropTypes.number,
    health: PropTypes.number,
    experience: PropTypes.number,
    experienceLeftToCollect: PropTypes.number,
    skills: PropTypes.number,
    skillsLeftToCollect: PropTypes.number,
    certifications: PropTypes.number,
    certificationsLeftToCollect: PropTypes.number,
    ultimate: PropTypes.number,
    ultimateLeftToCollect: PropTypes.number,
};

export default connect(mapStateToProps)(Stats);