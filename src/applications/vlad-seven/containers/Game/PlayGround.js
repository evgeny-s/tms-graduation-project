import {connect} from 'react-redux';
import PlayGround from '../../components/Game/PlayGround';
import C from '../../constans/Game';

const mapStoreToProps = state => {
    let {moveY, count, map} = state.game,
        start = moveY - count > map.length - 10
            ? map.length - 10
            : moveY - count < 0
                ? 0
                : moveY - count;

    return {
        map: map.slice(start, start + 10),
    }
};

const mapDispatchToProps = dispatch => ({
    blastBomb(e) {
        dispatch({
            type: C.BLAST,
            payload: e.target.className
        })
    },
});


export default connect(mapStoreToProps, mapDispatchToProps)(PlayGround);