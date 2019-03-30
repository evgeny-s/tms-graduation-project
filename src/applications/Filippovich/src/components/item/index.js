import React, {memo} from 'react';
import {GiRobotGolem, GiSpikedDragonHead,
    GiChewedSkull, GiHarryPotterSkull, GiPirateSkull, GiSurprisedSkull} from 'react-icons/gi';

import certificationTypes from "../../consts/certificationTypes";
import itemTypes from "../../consts/itemTypes";
import { Certifications, Ultimate, Medecine, Skills } from "../../consts/certificationTypes';
import './item.css'

function Item({type})
{
    let icon;
    switch (type) {
        case itemTypes.BOSSWALLSMALL:
            icon = <GiRobotGolem color='red'/>;
            break;
        case itemTypes.BOSSWALLBIG:
            icon = <GiSpikedDragonHead color='red'/>;
            break;
        case itemTypes.BOSS:
            icon = <GiRobotGolem color='red'/>;
            break;
        // case itemTypes.BOSSWALLSMALL:
        //     icon = <GiRobotGolem color='red'/>;
        //     break;
        // case itemTypes.BOSSWALLSMALL:
        //     icon = <GiRobotGolem color='red'/>;
        //     break;
        // case itemTypes.BOSSWALLSMALL:
        //     icon = <GiRobotGolem color='red'/>;
        //     break;
        case itemTypes.POLE:
            icon = Skills.SimpleSkill;
            break;

    }
    console.log('render');
    return (
        <div className={type}>
            {icon}
        </div>)
}

export default memo(Item);
