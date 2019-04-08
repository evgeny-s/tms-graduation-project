import {connect} from 'react-redux';
import Btn from '../../components/Content/ButtonWithBind/BtnWithId'

const mapDispatchToProps = dispatch => ({
    getItemIndex(type, index){
        dispatch({
            type: type,
            payload: +index
        })
    }
});

export default connect(null, mapDispatchToProps)(Btn)