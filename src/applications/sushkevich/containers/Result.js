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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);