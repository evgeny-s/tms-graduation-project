import React from 'react';
import {connect} from 'react-redux';
import './stats.css'

const mapStateToProps = state =>({
    buttonText: state.games.buttonText,
    certifications: state.games.certifications,
    skills: state.games.skills,
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
        const {certifications, skills, buttonText, clickSoundButton} = this.props;
        return (
        <div className="user-stats col-3">
            <p>Player Stats</p>
            <p>Level: 1</p>
            <p>Experience 1:</p>
            <p>Certifications: {certifications}</p>
            <p>Skills: {skills}</p>
            <button onClick={clickSoundButton} type="button" className="btn btn-success">{buttonText}</button>
        </div>
    );
}}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);