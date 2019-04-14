import {connect} from 'react-redux';
import PlayGround from '../../components/Game/PlayGround';
import C from '../../constans/Reducers';

const mapStoreToProps = state => {
    let {moveY, count, map} = state.game,
        start;

    if (moveY - count > map.length - 10) {
        start = map.length - 10;
    } else if (moveY - count < 0) {
        start = 0;
    } else {
        start = moveY - count
    }

    return {
        map: map.slice(start, start + 10),
    }
};

const mapDispatchToProps = dispatch => ({
    blastBomb: (e) =>
        dispatch({
            type: C.BLAST,
            payload: e.target.className
        }),
});


export default connect(mapStoreToProps, mapDispatchToProps)(PlayGround);