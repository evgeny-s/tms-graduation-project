import {connect} from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
    headerMessage: state.game.headerMessage,
});

export default connect(mapStateToProps)(Header);
