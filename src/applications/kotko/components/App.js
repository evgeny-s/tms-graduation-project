import React, { Copmonent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Content from './Content';
import Sidebar from './Sidebar';
import recipes from "../recipes";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.setRecipe = this.setRecipe.bind(this)
        this.showForm = this.showForm.bind(this)
        this.showIntro = this.showIntro.bind(this)
        this.deleteAll = this.deleteAll.bind(this)
        this.deleteRecipe = this.deleteRecipe.bind(this)
        this.editRecipe = this.editRecipe.bind(this)


        this.state = {
            openRecipe: null,
            route: "intro"
        }

        const recipes = JSON.parse(localStorage.getItem("recipes"));

        // if (localRecipes != this.props.recipes) {
        //     this.props.recipes = localRecipes
        // } else {
        //     localStorage.setItem("recipes", JSON.stringify(recipes));
        // }



        // cars = (cars) ? JSON.parse(cars) : [];
    }

    setRecipe(recipeID) {
        this.setState({
            openRecipe: recipeID,
            route: "recipe"
        })
    }

    deleteAll() {
        recipes.length = 0
        localStorage.setItem("recipes", JSON.stringify(recipes));
        this.setState({
            route: "intro"
        })
    }

    showIntro() {
        this.setState({
            openRecipe: null,
            route: "intro"
        })
    }

    deleteRecipe(recipeID) {
        // recipes.splice(recipeID, 1)

        var id
        recipes.map((recipe,index) => {
            if (recipe.id === recipeID)
              id = index
            }
        )
        recipes.splice(id, 1);
        localStorage.setItem("recipes", JSON.stringify(recipes));

        if (this.state.openRecipe != null || recipes.length === 0) {
            this.setState({ route: "intro" });
        } else {
            this.setState({ state: this.state });
        }
    }

    editRecipe(recipeId) {
        this.edit = recipeId
        this.setState({ route: "editForm", editId: recipeId });
    }

    showForm() {
        this.edit = null
        this.setState({ route: "addForm", editId: null });
        console.log('showFormAdd')
    }

    render() {

        const openRecipe = this.state.openRecipe
        const showForm = this.state.showForm
        const route = this.state.route

        return (
            <div className="container">
                <div className="row">
                    <Sidebar
                        setRecipe={this.setRecipe}
                        showForm={this.showForm}
                        showIntro={this.showIntro}
                        deleteAll={this.deleteAll}
                        recipes={recipes}
                    />
                    <Content
                        recipes={recipes}
                        showForm = {showForm}
                        route={route}
                        openRecipe={openRecipe}
                        deleteRecipe={this.deleteRecipe}
                        editRecipe={this.editRecipe}
                        setRecipe={this.setRecipe}
                        editId={this.state.editId}
                        recipes={recipes}
                    />
                </div>
            </div>
        )
    }

}

export default App;
