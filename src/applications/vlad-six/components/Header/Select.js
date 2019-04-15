import React from 'react';
import {connect} from 'react-redux';
import S from '../../consts/Select';

const Select = ({onChange, list, type, openForm}) => (
    <p>
        <select disabled={openForm} value={!openForm ? type : ''} onChange={onChange}>
            <option value='' disabled>
                Выберите тип блюда
            </option>
            {
                S.TYPE_OF_RECIPES.map((type, i) => {
                    let itemLength = list.filter(item => item.type.includes(type)).length;

                    return(
                        <option disabled={!itemLength} key={i} value={type}>{`${type} (${itemLength})`}</option>
                    )
                })
            }
            <option value={S.ALL_RECIPES}>{`Все рецепты (${list.length})`}</option>
        </select>
    </p>
);

const mapStoreToProps = state => ({
    list: state.form.list,
    type: state.form.type,
    openForm: state.control.openForm,
});

export default connect(mapStoreToProps)(Select);