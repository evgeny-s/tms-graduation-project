import React from 'react';
import {connect} from 'react-redux';
import './stats.css'

const mapStateToProps = state =>({
    buttonText: state.games.buttonText,
    certifications: state.games.certifications,
    skills: state.games.skills,
    experience: state.games.experience,
});

const mapDispatchToProps = dispatch => ({
    clickSoundButton: (e) =>
        dispatch({
            type: 'CLICK_SOUND_BUTTON',
            payload: e.target.innerText === 'Sound Off' ? 'Sound On' : 'Sound Off',
        }),

});


class Stats extends React.Component{
    render(){
        const {experience, certifications, skills, buttonText, clickSoundButton} = this.props;
        return (
        <div className="user-stats col-3">
            <p>Player Stats</p>
            <p>Level: 1</p>
            <p>Health: 5000</p>
            <p>Experience: {experience}</p>
            <p>Skills: {skills}/25</p>
            <p>Certifications: {certifications}/5</p>
            <button onClick={clickSoundButton} type="button" className="btn btn-success">{buttonText}</button>
        </div>
    );
}}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);