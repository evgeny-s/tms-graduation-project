import React from 'react';

const Textarea = ({onChange, ingredients, description}) => (
    <React.Fragment>
        <p>
            <label>
                Ингридиенты:
                <br/>
                <textarea onChange={onChange}
                          name="ingredients"
                          placeholder='Ингридиенты'
                          value={ingredients}
                />
            </label>
        </p>
        <p>
            <label>
                Инструкция приготовления:
                <br/>
                <textarea onChange={onChange}
                          name="description"
                          placeholder='Инструкция приготовления'
                          value={description}
                />
            </label>
        </p>
    </React.Fragment>
);

export default Textarea;