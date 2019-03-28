import React, {memo} from 'react';
import {GiRobotGolem, GiSpikedDragonHead,
    GiChewedSkull, GiHarryPotterSkull, GiPirateSkull, GiSurprisedSkull} from 'react-icons/gi';

import certificationTypes from "../../consts/certificationTypes";
import itemTypes from "../../consts/itemTypes";
import './item.css'

function Item({type})
{
    console.log('render');
    return (
        <div className={type}>
            { type === itemTypes.BOSSWALLSMALL ? <GiRobotGolem color='red'/> : '' }
            { type === itemTypes.BOSSWALLBIG ? <GiSpikedDragonHead color='red'/> : '' }
        </div>)
}

export default memo(Item);
