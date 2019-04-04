import {connect} from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = (state) => ({
    score: state.stats.steps,
    highscore: state.stats.highscore,
});

const mapDispatchToProps = (dispatch) => {
    return {
        recordHighscore: () => dispatch({
            type: 'RECORD_HIGHSCORE',
        }),
        resetGame: () => {
            dispatch({
                type: 'RESET_MAP',
            });
            dispatch({
                type: 'RESET_STATS',
            });
            dispatch({
                type: 'FETCH_HIGHSCORE',
            });
            dispatch({
                type: 'GAME_STARTED',
            });
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);