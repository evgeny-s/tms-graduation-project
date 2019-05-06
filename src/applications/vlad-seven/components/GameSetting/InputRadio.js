import React from 'react';
import PropTypes from "prop-types";
import InputRange from "./InputRange";

const InputRadio = ({label, value, onChange, difficulty}) => (
    <p>
        <label>
            {label}
            <input onChange={onChange}
                   defaultChecked={+value === difficulty && true}
                   name='difficulty'
                   type='radio'
                   value={value}/>
        </label>
    </p>
);

InputRange.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    difficulty: PropTypes.number,
    onChange: PropTypes.func,
};

export default InputRadio;