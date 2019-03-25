import React from 'react';

const Description = (props) => {
    return (
        <div className="description">
            <div className="description-block">
                <div className="description-text">
                    <p>Collect 25 certificates on the first level.</p>
                    <p>Collect 3 skills on the second level.</p>
                    <p>Finally beat the boss on the third level.</p>
                </div>
                <button onClick={props.onPlayClick}>Play game</button>
            </div>
        </div>
    )
};

export default Description;