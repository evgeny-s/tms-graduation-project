import React from 'react';
import {connect} from 'react-redux';
import Map from '../map';
import rules from '../../consts/rules';
import './panel.css';



const mapStateToProps = state => ({
    gameOver: state.games.gameOver,
});

function Panel({gameOver}) {
    let lose = <h1>Вы проиграли  :(</h1>;
    return (
        <div className="panel col-8">
            <h1 className="game-name col-12">Dungeon Warriors Game</h1>
            <h6 className='log'>Действия игрока</h6>

            {gameOver ? lose : <Map/>}
            <pre className='game-rules col-12'>{rules.Level_1}</pre>

        </div>
    );
}

export default connect(mapStateToProps)(Panel);