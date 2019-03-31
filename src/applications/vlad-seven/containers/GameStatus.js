import {connect} from 'react-redux';
import Button from '../components/GameStatus';
import C from '../constans/Game';

const mapDispatchToProps = dispatch => ({
    startGame(){
        dispatch({
            type: C.START_GAME
        })
    },
});

export default connect(null, mapDispatchToProps)(Button)