import {connect} from 'react-redux';
import Game from '../components/Game';
import C from '../constans/Game';

const mapStoreToProps = state => ({
    map: state.game.map,
    bomb: state.game.bomb,
    level: state.game.level,
    rows: state.gameSetting.rows,
    cells: state.gameSetting.cells,
    difficulty: state.gameSetting.difficulty,
});

const mapDispatchToProps = dispatch => ({
    loadMap(map){
        dispatch({
            type: C.LOAD_MAP,
            payload: map
        })
    },
    moveLeft() {
        dispatch({
            type: C.MOVE_LEFT,
        })
    },
    moveRight() {
        dispatch({
            type: C.MOVE_RIGHT
        })
    },
    moveDown() {
        dispatch({
            type: C.MOVE_DOWN
        })
    },
    moveUp() {
        dispatch({
            type: C.MOVE_UP
        })
    },
    removeGoldFromMap() {
        dispatch({
            type: C.GOLD_TO_PLAYER
        })
    },
    removeSilverFromMap() {
        dispatch({
            type: C.SILVER_TO_PLAYER
        })
    },
    finishGame(){
        dispatch({
            type: C.FINISH
        })
    },
    removeBombFromMap(){
        dispatch({
            type: C.BOMB_TO_PLAYER
        })
    }
});


export default connect(mapStoreToProps, mapDispatchToProps)(Game);