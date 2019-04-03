import React, {memo} from 'react';

import itemTypes from '../../consts/itemTypes';
import { Skills, Certifications, Ultimate, Medecine, BOSS } from '../../consts/itemIcons';
import './item.css'

function Item({type})
{
    let icon;
    switch (type) {
        case itemTypes.BOSSWALLSMALL:
            icon = BOSS.BOSSWALLSMALL;
            break;
        case itemTypes.BOSSWALLBIG:
            icon = BOSS.BOSSWALLBIG;
            break;
        case itemTypes.BOSS:
            icon = BOSS.BOSS1;
            break;
        case itemTypes.MEDECINE:
            icon = Medecine.Life;
            break;
        case itemTypes.CERTIFICATION:
            icon = Certifications.Helmet1;
            break;
        case itemTypes.ULTIMATE:
            icon = Ultimate.Fire;
            break;
        case itemTypes.SKILL:
            icon = Skills.SimpleSkill;
            break;
        default:
            icon = null;
    }
    console.log('render');
    return (
        <div className={type}>
            {icon}
        </div>)
}

export default memo(Item);
