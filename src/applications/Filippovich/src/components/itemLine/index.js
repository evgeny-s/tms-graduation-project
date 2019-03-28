import React from 'react';
import './itemLine.css'
import Item from '../item';

function ItemLine({itemsType, yKoord})
{
    return (
        <div className="itemLine">
            {
                itemsType.map((value, index) => ( <Item key={index} yKoord={yKoord} xKoord={index} type={value}/> ))
            }
        </div>
    );
}

export default ItemLine;