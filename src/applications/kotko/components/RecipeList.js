import React, { Component } from 'react';
import Recipe from './Recipe';


class RecipeList extends Component {

    render() {
        const recipes = this.props.recipes
        const openRecipe = this.props.openRecipe;
        const deleteRecipe = this.props.deleteRecipe;
        const editRecipe = this.props.editRecipe;
        const newRecipes = recipes.filter((recipe, index) => {
            if (recipe.id == openRecipe || openRecipe == null) {
                return true
            }
        })

        return (
            <div className="recipeList">
                {newRecipes.map((recipe, index) =>
                    <Recipe
                        key={recipe.id}
                        index={recipe.id}
                        deleteRecipe={this.deleteRecipe}
                        recipe={recipe}
                        deleteRecipe={deleteRecipe}
                        editRecipe={editRecipe}
                    />
                )}
            </div>
        );

    }
}

export default RecipeList;