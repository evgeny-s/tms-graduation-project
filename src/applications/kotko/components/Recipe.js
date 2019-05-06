import React, { Component } from 'react';

class Recipe extends Component {

    state = {
        isOpen: this.props.isOpen
    }

    render() {

        const deleteRecipe = this.props.deleteRecipe
        const editRecipe = this.props.editRecipe
        const recipe = this.props.recipe
        const index = this.props.index

            return (
                <div className="recipe">
                    <div className="recipeHeader">
                        {recipe.title} 
                        <div className="float-md-right">
                            <button className="btn btn-primary" onClick={() => editRecipe(index)}>Редактировать</button>
                            <button className="btn btn-danger" onClick={() => deleteRecipe(index)}>Удалить</button>
                        </div>
                        <hr/>
                    </div>
                    <div className="recipeBody">
                        <h5>Приготовление:</h5>
                        <p>{recipe.ingredients}</p>
                    </div>
                </div>
            )

    }
}

export default Recipe;