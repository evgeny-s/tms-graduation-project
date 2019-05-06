import React from 'react';

import Buttons from './List/Buttons';
import Recipe from './List/Recipe';

import './List/List.scss'

const RecipesList = ({list, index}) => {
    return(
        <section className='recipes'>
            {
                list.map((item, i) => (
                    <div key={i} className={`item-recipe ${i === index ? 'active' : ''}`}>
                        <Recipe item={item}/>
                        <Buttons id={item.id}/>
                    </div>
                ))
            }
        </section>
    )
};

export default RecipesList