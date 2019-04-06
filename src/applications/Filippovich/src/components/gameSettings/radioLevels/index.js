import React from 'react';
import {connect} from 'react-redux';


const mapStateToProps = state =>{

};

const mapDispatchToProps = dispatch => ({
    difficultyValueChange: () => dispatch({
        type: 'DIFFICULTY_VALUE_CHANGED',
        payload:
    }),

});

function RadioLevels({value})
{
    return (
        <div className='col-12'>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id={value}
                       value={value} onClick={this.props.difficultyValueChanged}/>
                <label className="form-check-label" htmlFor={value}>
                    {value}
                </label>
            </div>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(RadioLevels);
