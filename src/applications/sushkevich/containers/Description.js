import {connect} from 'react-redux';
import Description from '../components/Description';

const mapDispatchToProps = (dispatch) => {
    return {
        onPlayClick: () => {
            dispatch({
                type: 'PLAY_GAME'
            });
            dispatch({
                type: 'RESET_MESSAGE',
            })
        },
    };
};

export default connect(null, mapDispatchToProps)(Description);