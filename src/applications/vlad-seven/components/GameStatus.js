import React from 'react';
import PropTypes from 'prop-types';

const Button = ({startGame, label}) => (
    <button
        onClick={startGame}
        type='button'
    >
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string,
    startGame: PropTypes.func
};

export default Button;