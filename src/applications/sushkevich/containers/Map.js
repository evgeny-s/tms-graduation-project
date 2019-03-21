import {connect} from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = (state) => ({
    mapRows: state.game.mapRows,
    viewportRows: state.game.viewportRows,
});

export default connect(mapStateToProps)(Map);