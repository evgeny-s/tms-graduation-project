import React from 'react';
import MapItem from '../containers/MapItem';
import mapItemTypes from '../consts/mapItemTypes';

const Map = (props) => {
    return (
        <div className="map" onKeyDown={props.movePlayer} tabIndex="0">
            {
                props.viewportRows.map((rowId) => {
                    return (
                        <div key={rowId} className={`map-row row-${rowId}`}>
                            {
                                Object.keys(props.map[rowId]).map((col, i) => {
                                    return <MapItem
                                        key={i}
                                        type={props.map[rowId][col]}
                                        id={`${rowId}:${col}`}/>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Map;

// ВОПРОС! Как сделать вызов функции dispatch в зависимости от условия ?