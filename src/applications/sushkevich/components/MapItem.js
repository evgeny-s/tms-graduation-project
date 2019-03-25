import React from 'react';
import mapItemIcons from '../mapItemIcons';
import mapItemTypes from '../consts/mapItemTypes';

const MapItem = (props) => {

    let itemUnit = 'non-unit';
    for (let key in props.mapUnits) {
        if (props.mapUnits[key].indexOf(props.id) >= 0) {
            itemUnit = key;
        }
    }

    return (
        <div className={`map-item ${props.type} ${itemUnit}`} id={props.id}>
            {itemUnit === mapItemTypes.CERTIFICATE && mapItemIcons.certificates[Math.floor(Math.random()*mapItemIcons.certificates.length)]}
            {itemUnit === mapItemTypes.SKILL && mapItemIcons.skills[Math.floor(Math.random()*mapItemIcons.skills.length)]}
            {itemUnit  === mapItemTypes.PLAYER && mapItemIcons.player}
        </div>
    )
};

export default MapItem;

// ВОПРОС! Как убрать non-item? Чтобы ни какой класс вообще не добавлялся.
// ВОПРОС! Как сделать не props.mapUnits.certificate, а props.mapUnits[mapItemTypes.CERTIFICATE] ?