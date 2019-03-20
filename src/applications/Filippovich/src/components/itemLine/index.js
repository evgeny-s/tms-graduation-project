import React from 'react';
import layout from '../../../db/db.json';
import './itemLine.css'
import Item from '../item';


function ItemLine() {
    return (
        <div className="itemLine">
            <Item type="player"/>
            <Item type="wall"/>
            <Item type="skill"/>
            <Item type="bossWall"/>
            <Item type="boss"/>
        </div>
    );
}

export default ItemLine;