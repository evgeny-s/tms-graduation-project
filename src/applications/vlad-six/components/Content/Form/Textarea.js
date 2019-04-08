import React from 'react';

const Textarea = ({onChange, ingredients, description}) => (
    <React.Fragment>
        <p>
            <label>
                Игридиенты:
                <br/>
                <textarea onChange={onChange}
                          name="ingredients"
                          placeholder='Игридиенты'
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