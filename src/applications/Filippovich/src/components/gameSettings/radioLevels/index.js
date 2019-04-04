import React from 'react';


function RadioLevels({value})
{
    return (
        <div className='col-12'>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id={value}
                       value={value}/>
                <label className="form-check-label" htmlFor={value}>
                    {value}
                </label>
            </div>
        </div>
    )
}


export default RadioLevels;
