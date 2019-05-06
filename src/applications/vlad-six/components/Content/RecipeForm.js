import React from 'react';

import Select from './Form/Select';
import Textarea from './Form/Textarea';
import Input from './Form/InputTitle';

import './Form/Form.scss';

const RecipeFrom = ({editRecipe, onHandleChangeRecipe, onSubmit, openForm, ...rest}) => {
    let {title, type, description, ingredients} = rest,
        disabled = (title.trim() && description.trim() && ingredients.trim() && type.trim()) ? 0 : 1;

    return(
        <form>
            <Input onChange={onHandleChangeRecipe} value={title} openForm={openForm}/>
            <Select onChange={onHandleChangeRecipe} openForm={openForm}/>
            <Textarea onChange={onHandleChangeRecipe}
                      ingredients={ingredients}
                      description={description}
            />
            <button onClick={onSubmit}
                    type='button'
                    disabled={disabled}
            >
                {!editRecipe ? 'Добавить' : 'Редактировать'}
            </button>
        </form>
    );
};

export default RecipeFrom