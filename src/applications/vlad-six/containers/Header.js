import {connect} from 'react-redux';
import A from '../consts/Actions';
import Header from '../components/Header'

const mapStoreToProps = state => ({
    editRecipe: state.control.editRecipe,
    openForm: state.control.openForm,
    title: state.form.title
});

const mapDispatchToProps = dispatch => ({
    onHandleClickModal: () =>
        dispatch({
            type: A.OPEN_FORM,
        }),

    sortList: (e) =>
        dispatch({
            type: A.SORT_LIST,
            payload: e.target.value
        }),

    sortByTitle: (e) =>
        dispatch({
            type: A.SORT_BY_TITLE,
            payload: e.target.value
        })
});

export default connect(mapStoreToProps, mapDispatchToProps)(Header)