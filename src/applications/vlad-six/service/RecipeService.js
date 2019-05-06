class RecipeService{
    getList(){
        return fetch('http://localhost:3005/recipes')
            .then((res) => res.json())
    }

    add(data){
        return fetch('http://localhost:3005/recipes', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
    }

    remove(id){
        return fetch(`http://localhost:3005/recipes/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
    }
    edit(data) {
        return fetch(`http://localhost:3005/recipes/${data.id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
    }
}

export default new RecipeService();