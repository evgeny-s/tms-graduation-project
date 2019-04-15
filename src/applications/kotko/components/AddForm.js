import React, { Component } from 'react';
import recipes from "../recipes";

class AddForm extends Component {

    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.recipes = this.props.recipes
    }

    submitForm(event) {
        event.preventDefault()
        var setRecipe = this.props.setRecipe
        const title = event.target.title.value
        const ingredients = event.target.text.value

            var newId = 0;
            this.recipes.map(recipe => {
                if (recipe.id > newId) {
                    newId = recipe.id
                }
            })
            newId++;
            const newRecipe = {
                "id": newId,
                "title": title,
                "ingredients": ingredients
            }
            if (title && ingredients) {
                var index = this.recipes.push(newRecipe)
                localStorage.setItem("recipes", JSON.stringify(this.recipes));
                setRecipe(newId)
            }
    }


    render() {

        return (
            <div className="form">
                <form onSubmit={this.submitForm}>
                    <p><b>Название рецепта</b></p>
                    <input name="title" type="text" placeholder="Название"/>
                    <br/>
                    <br/>
                    <p><b>Рецепт</b></p>
                    <textarea name="text" id="" cols="30" rows="10" placeholder="Ингридиенты"></textarea>
                    <br/>
                    <br/>
                    <button className="btn btn-primary">Сохранить</button>
                </form>
            </div>
        )
    }
}

export default AddForm;