import {connect} from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = (state) => ({
    map: state.game.map,
    viewportRows: state.game.viewportRows,
    viewportThreshold: state.game.viewportThreshold,
    playerCoordinateX: state.game.playerCoordinateX,
    playerCoordinateY: state.game.playerCoordinateY,
    playerLevel: state.game.playerStats.level,
    skillsGot: state.game.playerStats.skills,
});

const mapDispatchToProps = (dispatch) => {
    return {
        moveLeft: () => dispatch({
            type: 'MOVE_LEFT',
        }),
        moveRight: () => dispatch({
            type: 'MOVE_RIGHT',
        }),
        moveUp: () => dispatch({
            type: 'MOVE_UP',
        }),
        moveDown: () => dispatch({
            type: 'MOVE_DOWN',
        }),
        scrollMap: (newViewportRows) => dispatch({
            type: 'SCROLL_MAP',
            payload: newViewportRows,
        }),
        getSkill: () => dispatch({
            type: 'GET_SKILL',
        }),
        levelUp: () => dispatch({
            type: 'LEVEL_UP',
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
