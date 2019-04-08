import {connect} from 'react-redux';
import A from '../consts/Actions';
import Content from '../components/Content'

const mapStoreToProps = state => ({
    openForm: state.control.openForm,
    sortList: state.form.sortList
});

const mapDispatchToProps = dispatch => ({
   fetchList(){
       dispatch({
           type: A.FETCH_LIST
       })
   }
});


export default connect(mapStoreToProps, mapDispatchToProps)(Content)