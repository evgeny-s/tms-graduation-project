import {connect} from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = (state) => ({
    mapRows: state.game.mapRows,
    viewportRows: state.game.viewportRows,
});

const mapDispatchToProps = (dispatch) => {
    return {
        movePlayer: (event) => dispatch({
            type: 'MOVE_PLAYER',
            payload: event.keyCode,
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);