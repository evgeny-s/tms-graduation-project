import {connect} from 'react-redux';
import MapItem from '../components/MapItem';

const mapStateToProps = (state) => ({
    mapUnits: state.game.mapUnits,
});

export default connect(mapStateToProps)(MapItem);