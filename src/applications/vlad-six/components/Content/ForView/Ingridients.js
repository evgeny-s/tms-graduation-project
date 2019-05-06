import React from 'react';

const Ingredients = ({ingredients}) => (
    <ul className='ingredients'>
        <h3>Ингридиенты:</h3>
        {
            ingredients.map((ing, i) => (
                <li key={i}>{`${i + 1})`} {ing}</li>
            ))
        }
    </ul>
);

export default Ingredients