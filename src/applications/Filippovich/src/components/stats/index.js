import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import './stats.css'

const mapStateToProps = state =>({
    buttonText: state.games.buttonText,
});

const mapDispatchToProps = dispatch => ({
    clickStats: (e) => {
        console.log('clickStats');
    },
    clickSoundButton: (e) =>{
        e.stopPropagation();
        dispatch({
            type: 'CLICK_SOUND_BUTTON',
            payload: e.target.innerText === 'Sound Off' ? 'Sound On' : 'Sound Off',
        })
    }
});



class Stats extends React.Component{
    myRef = React.createRef();

    focusingDivElement = () => {
        this.myRef.current.focus();
         console.log( this.myRef.current );

    }
    componentDidMount() {
        this.myRef.current.focus();
    }

    render(){
        const {buttonText, clickSoundButton, clickStats} = this.props;
        return (
        <div ref={this.myRef}  className="user-stats col-3" onClick={this.focusingDivElement} onKeyDown={clickStats}>
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