class DBService{
    static getAllTodos(){
        const url = 'https://64b51348f3dbab5a95c6a622.mockapi.io/todos';
        return fetch(url).then(resp => resp.json())
        .then(resp => resp.json())
        .then(result => this.convertToTodoArray(result))
    }

    static convertToTodoArray(genericArray){
        const tempArray = [];

        for (const obj of genericArray) {
            const
        }
    }
}