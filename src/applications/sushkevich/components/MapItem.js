import React, {memo} from 'react';
import mapItemIcons from '../db/mapItemIcons';
import mapItemTypes from '../consts/mapItemTypes';

const MapItem = (props) => {

    console.log('item rendered');
    return (
        <div className={`map-item ${props.type}`} id={props.id}>
            {props.type === mapItemTypes.CERTIFICATE && mapItemIcons.certificates[Math.floor(Math.random()*mapItemIcons.certificates.length)]}
            {props.type === mapItemTypes.SKILL && mapItemIcons.skills[Math.floor(Math.random()*mapItemIcons.skills.length)]}
            {props.type === mapItemTypes.PLAYER && mapItemIcons.player}
        </div>
    )
};

export default memo(MapItem);
