import React from 'react';
import A from '../../../consts/Actions';
import {connect} from 'react-redux';

import Button from '../../../containers/ButtonWithBind/BtnWithId';

const Buttons = ({editRecipe, id, openForm}) => (
    <div className='buttons'>
        <Button
            disabled={editRecipe || openForm}
            id={id}
            type={A.DELETE_ITEM}
            label={'Удалить'}
        />
        <Button
            disabled={editRecipe || openForm}
            id={id}
            type={A.SHOW_RECIPE}
            label={'Открыть'}
        />
    </div>
);

const mapStoreToProps = state => ({
    editRecipe: state.control.editRecipe,
    openForm: state.control.openForm,
});

export default connect(mapStoreToProps)(Buttons);