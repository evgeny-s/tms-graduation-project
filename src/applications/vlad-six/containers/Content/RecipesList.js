import {connect} from 'react-redux';
import List from '../../components/Content/RecipesList'

const mapStoreToProps = state => ({
    list: state.form.sortList,
    index: state.form.index,
});


export default connect(mapStoreToProps)(List)