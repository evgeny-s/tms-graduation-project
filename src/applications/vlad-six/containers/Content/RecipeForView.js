import {connect} from 'react-redux';
import Item from '../../components/Content/RecipeForView'

const mapStoreToProps = state => ({
    list: state.form.sortList[state.form.index],
    index: state.form.index,
});


export default connect(mapStoreToProps)(Item)