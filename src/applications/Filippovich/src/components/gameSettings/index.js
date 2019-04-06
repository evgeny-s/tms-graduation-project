import React from 'react';
import {connect} from 'react-redux';
import RadioLevels from './radioLevels';
import viewConsts from '../../consts/views';
import levelsList from '../../consts/levelsList';
import './gameSettings.css';


const mapStateToProps = state => ({
    inputNameValue: state.settings.inputNameValue,
    inputDifficultyValue: state.settings.inputDifficultyValue,
});

const mapDispatchToProps = dispatch => ({
    clickStartButton: () => dispatch({
        type: 'CHANGE_VIEW',
        payload: viewConsts.GAME,
    }),
    onInputNameChanged: (event) => dispatch({
        type: "ON_INPUT_NAME_CHANGED",
        payload: event.target.value,
    }),

});


function GameSettings({inputNameValue, clickStartButton, onInputNameChanged})
{
    return (
        <div className='game-settings col-12'>
            <h3>Game Settings</h3>
            <div className="input-group col-4">
                <label className='name-label col-12'>Input Player Name</label>
                <input type="text" className="form-control" placeholder='Input Player Name'
                       onChange={onInputNameChanged} value={inputNameValue}/>
                {levelsList.map( (item, index) => <RadioLevels key={index} value={item}/>)}

            </div>
            <button onClick={clickStartButton} type="button" className="btn btn-primary">Start Game</button>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);
