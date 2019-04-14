import React from 'react';
import Select from './Header/Select'

const Header = ({onHandleClickModal, sortList, sortByTitle, ...rest}) => {
    let {editRecipe, title, openForm} = rest;

    return(
        <header>
            <h1>Книга рецептов</h1>
            <div className='section'>
                <input
                    value={!openForm ? title : ''}
                    disabled={openForm}
                    placeholder={'Название блюда'}
                    onChange={sortByTitle}
                />
                <Select
                    header={true}
                    onChange={sortList}
                />
                <button
                    disabled={editRecipe}
                    onClick={onHandleClickModal}
                >
                    Добавить новый рецепт
                </button>
            </div>
        </header>
    )
};


export default Header;