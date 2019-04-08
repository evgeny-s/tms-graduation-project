import React from 'react';
import PropTypes from 'prop-types';

const InputRange = ({label, val, onChange, defaultValue}) => (
    <p>
        {label}: {val}
        <input onChange={onChange}
               name={label.toLowerCase()}
               type='range'
               min={defaultValue * 0.5}
               max={defaultValue * 1.5}
               defaultValue={val}
               step='1'
        />
    </p>
);

InputRange.propTypes = {
    label: PropTypes.string,
    val: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
};

export default InputRange;