import React from 'react';
import {connect} from 'react-redux';
import './stats.css'

const mapStateToProps = state => ({
    buttonText: state.games.buttonText,
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

const mapDispatchToProps = dispatch => ({
    clickSoundButton: (e) =>
        dispatch({
            type: 'CLICK_SOUND_BUTTON',
            payload: e.target.innerText === 'Sound Off' ? 'Sound On' : 'Sound Off',
        }),

});


function Stats({
                   name, level, health, experience, experienceLeftToCollect, skills, skillsLeftToCollect,
                   certifications, certificationsLeftToCollect, ultimate, ultimateLeftToCollect, buttonText, clickSoundButton
               })
{
    return (
        <div className="user-stats col-3">
            <p>"{name}" Statistics</p>
            <p>Level: {level}</p>
            <p>Health: {health}</p>
            <p>Experience: {experience}/{experienceLeftToCollect}</p>
            <p>Skills: {skills}/{skillsLeftToCollect}</p>
            <p>Certifications: {certifications}/{certificationsLeftToCollect}</p>
            <p>Ultimate skills: {ultimate}/{ultimateLeftToCollect}</p>
            <button onClick={clickSoundButton} type="button" className="btn btn-success">{buttonText}</button>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Stats);