import React from 'react';

const Recipe = ({item}) => (
    <div className='recipe'>
        <p className='type'>{item.type}</p>
        <p className='title'>
            {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
        </p>
        <p className='ingredients'>Ингридиенты: {item.ingredients.length}</p>
    </div>
);

export default Recipe;