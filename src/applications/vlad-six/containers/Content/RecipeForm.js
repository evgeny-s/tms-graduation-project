import {connect} from 'react-redux';
import A from '../../consts/Actions'
import Form from '../../components/Content/RecipeForm'

const mapStoreToProps = state => ({
    title: state.form.title,
    ingredients: state.form.ingredients,
    description: state.form.description,
    type: state.form.type,
    editRecipe: state.control.editRecipe,
    openForm: state.control.openForm,
});

const mapDispatchToProps = dispatch => ({
    onHandleChangeRecipe(e){
        dispatch({
            type: A.ON_CHANGE,
            payload: {
                [e.target.name]: e.target.value
            }
        })
    },
    onSubmit(){
        dispatch({
            type: A.SUBMIT_FORM,
        })
    }
});

export default connect(mapStoreToProps, mapDispatchToProps)(Form)