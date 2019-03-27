import React, {memo} from 'react';
import mapItemIcons from '../db/mapItemIcons';
import mapItemTypes from '../consts/mapItemTypes';

const MapItem = (props) => {

    console.log('item rendered');

    return (
        <div className={`map-item ${props.type}`} id={props.id}>
            {props.type === mapItemTypes.CERTIFICATE && mapItemIcons.certificates[0]}
            {props.type === mapItemTypes.SKILL && mapItemIcons.skills[0]}
            {props.type === mapItemTypes.PLAYER && mapItemIcons.player}
            {props.type === mapItemTypes.BOSS && mapItemIcons.boss}
        </div>
    )
};

export default memo(MapItem);

// switch (props.type) {
//     case mapItemTypes.PLAYER:
//         return (
//             <div className={`map-item ${props.type}`} id={props.id}>
//                 {mapItemIcons.player}
//             </div>
//         );
//     case mapItemTypes.SKILL:
//         return (
//             <div className={`map-item ${props.type}`} id={props.id}>
//                 {mapItemIcons.skills[Math.floor(Math.random()*mapItemIcons.skills.length)]}
//             </div>
//         );
//     case mapItemTypes.CERTIFICATE:
//         return (
//             <div className={`map-item ${props.type}`} id={props.id}>
//                 {mapItemIcons.certificates[Math.floor(Math.random()*mapItemIcons.certificates.length)]}
//             </div>
//         );
//     case mapItemTypes.BOSS:
//         return (
//             <div className={`map-item ${props.type}`} id={props.id}>
//                 {mapItemIcons.boss}
//             </div>
//         );
//     default:
//         return <div className={`map-item ${props.type}`} id={props.id}></div>
// }