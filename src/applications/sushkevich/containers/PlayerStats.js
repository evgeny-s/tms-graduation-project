import {connect} from 'react-redux';
import PlayerStats from '../components/PlayerStats';

const mapStateToProps = (state) => ({
    playerStats: state.game.playerStats,
});

export default connect(mapStateToProps)(PlayerStats);