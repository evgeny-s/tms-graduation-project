import React from 'react';
import withHeader from './../../hocs/withHeader';

import LatLong from './components/LatLong.js';
import Timestamp from './components/Timestamp.js';
import Velocity from './components/Velocity.js';

import {getSpaceInfo,resolvedGetData} from './containers/getSpaceInfo.js';


function SpaceInfo() {
    return (
	<div>
        <p>Current Data on the ISS:</p>
        <LatLong value={}/>
		<LatLong value={}/>
        <Timestamp />
        <Velocity />
	</div>
    );
}

export default withHeader(SpaceInfo);