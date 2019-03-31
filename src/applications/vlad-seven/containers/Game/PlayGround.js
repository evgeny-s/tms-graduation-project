import {connect} from 'react-redux';
import PlayGround from '../../components/Game/PlayGround';
import C from '../../constans/Game';

const mapStoreToProps = state => ({
    map: state.game.map,
    moveY: state.game.moveY,
    count: state.game.count,
});

const mapDispatchToProps = dispatch => ({
    blastBomb(e) {
        dispatch({
            type: C.BLAST,
            payload: e.target.className
        })
    },
});


export default connect(mapStoreToProps, mapDispatchToProps)(PlayGround);