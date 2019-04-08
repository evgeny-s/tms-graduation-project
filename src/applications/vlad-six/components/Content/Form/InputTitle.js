import React from 'react';

const Input = ({onChange, value, openForm}) => (
    <p>
        <label>
            Название блюда:
            <br/>
                <input onChange={onChange}
                       name='title'
                       placeholder='Название блюда'
                       value={openForm ? value : ''}
                />
        </label>
    </p>
);

export default Input;