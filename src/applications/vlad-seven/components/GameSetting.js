import React from 'react';
import InputRange from './GameSetting/InputRange';
import InputRadio from './GameSetting/InputRadio';
import Start from '../containers/GameStatus'
import './GameSetting/GameSetting.scss'
import PropTypes from 'prop-types';

const GameSetting = ({mapSetting, rows, cells, difficulty}) => (
    <section className='Menu'>
        <h3>Difficulty level</h3>
        <InputRadio label='easy' difficulty={difficulty} onChange={mapSetting} value='15'/>
        <InputRadio label='normal' difficulty={difficulty} onChange={mapSetting} value='25'/>
        <InputRadio label='hard' difficulty={difficulty} onChange={mapSetting} value='35'/>

        <h3>Map Setting</h3>
        <InputRange label='Rows' val={rows} onChange={mapSetting} defaultValue='100'/>
        <InputRange label='Cells' val={cells} onChange={mapSetting} defaultValue='20'/>

        <Start label='Start'/>
    </section>
);

GameSetting.propTypes = {
    rows: PropTypes.number,
    cells: PropTypes.number,
    mapSetting: PropTypes.func,
};

export default GameSetting;
