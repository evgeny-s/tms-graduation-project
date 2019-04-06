import React from 'react';
import ViewportChanger from '../containers/ViewportSelector';

const Options = (props) => {
    return (
        <div className="options-bar">
            <h3>Options</h3>
            <ViewportChanger/>
        </div>
    )
};

export default Options;