import React from 'react';
import A from '../../consts/Actions';

import Ingredients from './ForView/Ingridients';
import Description from './ForView/Description';
import Button from '../../containers/ButtonWithBind/BtnWithId';

const RecipeForView = ({list}) => (
    <div className='recipe-full'>
        <h2>{list.title}</h2>
        <Ingredients ingredients={list.ingredients}/>
        <Description description={list.description}/>
        <Button
            type={A.RECIPE_TO_STORE}
            id={list.id}
            label={'Изменить'}
        />
    </div>
);

export default RecipeForView