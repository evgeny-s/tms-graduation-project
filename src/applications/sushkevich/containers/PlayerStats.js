import {connect} from 'react-redux';
import PlayerStats from '../components/PlayerStats';

const mapStateToProps = (state) => ({
    playerStats: state.stats,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getHighscore: () => dispatch({
            type: 'FETCH_HIGHSCORE',
        }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStats);