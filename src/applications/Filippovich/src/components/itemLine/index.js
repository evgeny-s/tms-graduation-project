import React from 'react';
import layout from '../../../db/db.json';
import './itemLine.css'
import Item from '../item';


function ItemLine({itemsType})
{
    return (
        <div className="itemLine">
            {
                itemsType.map((value, index) => (
                    <Item key={index} type={value}/>
                ))
            }
        </div>
    );
}

export default ItemLine;