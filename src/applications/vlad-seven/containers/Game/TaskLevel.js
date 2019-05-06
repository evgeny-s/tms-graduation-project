import {connect} from 'react-redux';
import TaskLevel from '../../components/Game/TaskLevel';

const mapStoreToProps = state => ({
    gold: state.game.gold,
    silver: state.game.silver,
    level: state.game.level,
    map: state.game.map
});

export default connect(mapStoreToProps)(TaskLevel);