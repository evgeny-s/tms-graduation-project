import React from 'react';

const Button = ({disabled, id, getItemIndex, type, label}) => (
    <button
        disabled={disabled}
        onClick={getItemIndex.bind(null, type, id)}
    >
        {label}
    </button>
);

export default Button