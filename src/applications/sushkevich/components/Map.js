import React from 'react';
import MapItem from './MapItem';
import mapItemTypes from '../consts/mapItemTypes';

const Map = (props) => {
    return (
        <div className="map">
            {
                props.viewportRows.map((rowId) => {
                    return (
                        <div key={rowId} className={`map-row row-${rowId}`}>
                            {
                                Object.keys(props.mapRows[rowId]).map((col, i) => {
                                    return <MapItem
                                        key={i}
                                        type={props.mapRows[rowId][col]}
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