import {connect} from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = (state) => ({
    map: state.game.map,
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
// ВОПРОС! Где лучше рисовать логику проверки на движение? Здесь? Или в редьюсере ?
// ВОПРОС! Стоит ли делать MOVE_LEFT, MOVE_RIGHT и т.д. ?