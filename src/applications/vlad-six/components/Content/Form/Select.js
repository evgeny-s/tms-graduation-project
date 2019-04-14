import React from 'react';
import {connect} from 'react-redux';
import S from '../../../consts/Select';

const Select = ({onChange, list, openForm, type}) => (
    <p>
        <label>
        Тип блюда:
            <select value={openForm ? type : ''} name='type' onChange={onChange}>
                <option value='' disabled>
                    Выберите тип блюда
                </option>
                {
                    S.TYPE_OF_RECIPES.map((type, i) => {
                        let itemLength = list.filter(item => item.type.includes(type)).length;

                        return(
                            <option key={i} value={type}>{`${type} (${itemLength})`}</option>
                        )
                    })
                }
            </select>
        </label>
    </p>
);

const mapStoreToProps = state => ({
    list: state.form.list,
    type: state.form.type,
});

export default connect(mapStoreToProps)(Select);