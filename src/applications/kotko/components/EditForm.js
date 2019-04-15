import React, { Component } from 'react';
import recipes from "../recipes";

class EditForm extends Component {

    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.recipes = this.props.recipes
        this.edit = this.props.edit

            this.recipe = this.recipes.filter( (recipe, index) =>{
                if (recipe.id === this.edit) {
                    return true
                }
            })
            this.state = {
                title: this.recipe[0].title,
                text: this.recipe[0].ingredients,
                edit: this.edit
            }
    }

    submitForm(event) {
        event.preventDefault()
        var setRecipe = this.props.setRecipe
        const title = event.target.title.value
        const ingredients = event.target.text.value
            const newRecipe = {
                "id": this.edit,
                "title": title,
                "ingredients": ingredients
            }
            recipes.map((recipe, index) => {
                if (recipe.id === this.edit) {
                    recipes[index] = newRecipe
                }
            })
            setRecipe(this.edit)
    }


    render() {

        var title = this.state.title
        var text = this.state.text

        return (
            <div className="form">
                <form onSubmit={this.submitForm}>
                    <p><b>Название рецепта</b></p>
                    <input name="title" type="text" defaultValue={title} placeholder="Название"/>
                    <br/>
                    <br/>
                    <p><b>Рецепт</b></p>
                    <textarea name="text" id="" cols="30" rows="10" placeholder="Ингридиенты" defaultValue={text}></textarea>
                    <br/>
                    <br/>
                    <button className="btn btn-primary">Сохранить</button>
                </form>
            </div>
        )
    }
}

export default EditForm;