import {connect} from 'react-redux';
import ModalMessage from '../components/modal';


const mapStateToProps = state => ({
    isShowModal: state.settings.isShowModal,
});

const mapDispatchToProps = dispatch => ({
    onModalHide: () => dispatch({
        type: 'SHOW_MODAL',
        payload: false,
    })
});


export default connect(mapStateToProps, mapDispatchToProps)(ModalMessage);