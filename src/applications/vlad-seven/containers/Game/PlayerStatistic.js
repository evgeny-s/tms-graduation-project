import {connect} from 'react-redux';
import PlayerStatistic from '../../components/Game/PlayerStatistic';

const mapStoreToProps = state => ({
    gold: state.game.gold,
    silver: state.game.silver,
    level: state.game.level,
    bomb: state.game.bomb,
    map: state.game.map
});

export default connect(mapStoreToProps)(PlayerStatistic);