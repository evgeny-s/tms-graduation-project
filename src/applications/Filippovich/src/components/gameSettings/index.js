import React from 'react';
import {connect} from 'react-redux';
import RadioLevels from './radioLevels';
import viewConsts from '../../consts/views';
import levelsList from '../../consts/levelsList';
import ModalMessage from '../modal'
import './gameSettings.css';


const mapStateToProps = state => ({
    inputNameValue: state.settings.inputNameValue,
});

const mapDispatchToProps = dispatch => ({
    onStartGame: () => dispatch({
        type: 'CHANGE_VIEW',
        payload: viewConsts.GAME,
    }),
    onInputNameChanged: (e) => dispatch({
        type: "ON_INPUT_NAME_CHANGED",
        payload: e.target.value,
    }),
    onModalShow: () => dispatch({
        type: 'SHOW_MODAL',
        payload: true,
    })
});


function GameSettings({inputNameValue, onStartGame, onInputNameChanged, onModalShow})
{
    const _clickStartButton = () =>
    {
        if (inputNameValue !== '') {
            onStartGame();
        } else {
            onModalShow();
        }
    };

    return (
        <>
            <ModalMessage/>
            <div className='game-settings col-12'>
                <h3>Game Settings</h3>
                <div className="input-group col-4">
                    <label className='name-label col-12'>Player Name:</label>
                    <input type="text" className='form-control name-input' placeholder='Input Player Name'
                           onChange={onInputNameChanged} value={inputNameValue}/>
                    <label className='difficulty-label col-12'>Select difficulty:</label>
                    {levelsList.map((item, index) => <RadioLevels key={index} index={index + 1} value={item}/>)}

                </div>
                <button onClick={_clickStartButton} type="button" className="btn btn-primary">Start Game</button>
            </div>
        </>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);
