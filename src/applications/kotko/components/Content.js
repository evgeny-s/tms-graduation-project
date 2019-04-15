import React, { Component } from 'react';
import Intro from './Intro';
import AddForm from './AddForm';
import EditForm from './EditForm';
import RecipeList from './RecipeList';

class Content extends Component {



    render() {
        const openRecipe = this.props.openRecipe
        const deleteRecipe = this.props.deleteRecipe
        const recipes = this.props.recipes
        const route = this.props.route
        const setRecipe = this.props.setRecipe
        const editRecipe = this.props.editRecipe
        const editId = this.props.editId

        let content
        if (route === "intro") {
            content = <Intro />
        }
        if (route === "addForm") {
            content = <AddForm
                        recipes={recipes}
                        setRecipe={setRecipe}
                        />
        }
        if (route === "editForm") {
            content = <EditForm
                        recipes={recipes}
                        setRecipe={setRecipe}
                        edit={editId}
                        />
        }
        if (route === "recipe") {
            content = <RecipeList
                        recipes = {recipes}
                        openRecipe = {openRecipe}
                        deleteRecipe = {deleteRecipe}
                        editRecipe = {editRecipe}
                      />
        }

        return (
            <div className="col-md-8">
                {content}
            </div>
        )
    };

}


export default Content;