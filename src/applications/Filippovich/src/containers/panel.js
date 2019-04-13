import {connect} from 'react-redux';
import Panel from '../components/panel';

const mapStateToProps = state => ({
    ruleText: state.games.ruleText,
});

export default connect(mapStateToProps)(Panel);