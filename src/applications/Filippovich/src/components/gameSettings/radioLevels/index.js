import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
    inputDifficultyValue: state.settings.inputDifficultyValue,
});

const mapDispatchToProps = dispatch => ({
    difficultyValueChanged: (e) => dispatch({
        type: 'ON_DIFFICULTY_VALUE_CHANGED',
        payload: parseInt(e.target.id),
    }),

});

function RadioLevels({inputDifficultyValue, difficultyValueChanged, index, value})
{
    let check = false;
    if ((index) === inputDifficultyValue) {
        check = true;
    }
    return (
            <div className='form-check col-12'>
                <label className="form-check-label" htmlFor={index}>
                    <input className="form-check-input" type="radio" name="levelRadios" id={index}
                           value={value} onClick={difficultyValueChanged} defaultChecked={check}/>
                    {value}
                    <span className="checkmark"> </span>
                </label>
            </div>
    )
}

RadioLevels.propTypes = {
    inputDifficultyValue: PropTypes.number,
    difficultyValueChanged: PropTypes.func,
    index: PropTypes.number,
    value: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioLevels);
