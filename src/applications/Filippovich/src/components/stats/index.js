import React from 'react';
import {connect} from 'react-redux';
import './stats.css'

const mapStateToProps = state => ({
    buttonText: state.games.buttonText,
    level: state.games.level,
    health: state.games.head,
    experience: state.games.experience,
    skills: state.games.skills,
    skillsLeftToCollect: 10,
    certifications: state.games.certifications,
    certificationsLeftToCollect: state.games.certificationsLeftToCollect,
    ultimate: state.games.ultimate,
    ultimateLeftToCollect: state.games.ultimateLeftToCollect,
    medicine: state.games.medicine,
    medicineLeftToCollect: state.games.medicineLeftToCollect,
});

const mapDispatchToProps = dispatch => ({
    clickSoundButton: (e) =>
        dispatch({
            type: 'CLICK_SOUND_BUTTON',
            payload: e.target.innerText === 'Sound Off' ? 'Sound On' : 'Sound Off',
        }),

});


class Stats extends React.Component
{
    render()
    {
        const {
            level, health, experience, skills, skillsLeftToCollect, certifications, certificationsLeftToCollect,
            ultimate, ultimateLeftToCollect, medicine, medicineLeftToCollect, buttonText, clickSoundButton
        } = this.props;
        return (
            <div className="user-stats col-3">
                <p>Player Stats</p>
                <p>Level: {level}</p>
                <p>Health: {health}</p>
                <p>Experience: {experience}</p>
                <p>Skills: {skills}/{skillsLeftToCollect}</p>
                <p>Certifications: {certifications}/{certificationsLeftToCollect}</p>
                <p>Ultimate skills: {ultimate}/{ultimateLeftToCollect}</p>
                <p>Medicament: {medicine}/{medicineLeftToCollect}</p>
                <button onClick={clickSoundButton} type="button" className="btn btn-success">{buttonText}</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);