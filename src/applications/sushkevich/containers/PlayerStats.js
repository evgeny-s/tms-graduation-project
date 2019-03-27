import {connect} from 'react-redux';
import PlayerStats from '../components/PlayerStats';

const mapStateToProps = (state) => ({
    playerStats: state.stats.playerStats,
});

export default connect(mapStateToProps)(PlayerStats);