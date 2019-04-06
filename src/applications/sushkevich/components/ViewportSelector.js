import React from 'react';
import config from '../db/config';

const ViewportSelector = (props) => {
    return (
        <div className="viewport-changer">
            <span>Viewport size: </span>
            <select onChange={props.changeViewport.bind(null, props.map, props.playerY)}>
                {
                    config.viewportSizes.map((size, i) => {
                        return <option key={`size_${i}`}>{size}</option>
                    })
                }
            </select>
        </div>
    )
};

export default ViewportSelector;