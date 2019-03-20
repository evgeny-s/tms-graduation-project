import React from 'react';

import MapItem from './MapItem';

let mapData = {
    cols: 20,
    rows: 100,
};

const Map = (props) => {
    return (
        <div className="map">
            <MapItem/>
        </div>
    )
};

export default Map;