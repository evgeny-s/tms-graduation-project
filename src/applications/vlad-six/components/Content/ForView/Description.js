import React from 'react';

const Description = ({description}) => (
    <div className='description'>
        <h3>Инструкция приготовления:</h3>
        {
            description.map((des, i) => (
                <p key={i}>{des}</p>
            ))
        }
    </div>
);

export default Description