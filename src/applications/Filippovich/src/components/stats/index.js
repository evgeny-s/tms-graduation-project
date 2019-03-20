import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import './stats.css'

const mapStateToProps = state =>({
    buttonText: state.games.buttonText,
});

const mapDispatchToProps = dispatch => ({
    clickSoundButton: (e) =>
        dispatch({
            type: 'CLICK_SOUND_BUTTON',
            payload: e.target.innerText === 'Sound Off' ? 'Sound On' : 'Sound Off',
        })
});



class Stats extends React.Component{
    render(){
        const {buttonText, clickSoundButton} = this.props;
        return (
        <div className="user-stats col-3">
            <p>Player Stats:</p>
            <p>Level:</p>
            <p>Experience:</p>
            <p>Attack:</p>
            <p>Certifications:</p>
            <p>Skills:</p>
            <button onClick={clickSoundButton} type="button" className="btn btn-success">{buttonText}</button>
        </div>
    );
}}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);