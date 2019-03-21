import React from 'react';
const Description = (props) => {
    return (
        <div className="description">
            <div>Some description</div>
            <button onClick={props.onPlayClick}>Play game</button>
        </div>
    )
};

export default Description;