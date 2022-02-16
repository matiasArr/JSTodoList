export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));

        if(!this.todos || this.todos.length < 1) {
            this.todos = [
                {
                    id: 0,
                    title: 'No hay todo',
                    description: 'No se encontraron todos',
                    completed: false,
                }
            ]
            this.currentId = 1;
        }else {
            this.currentId = this.todos[this.todos.length -1].id + 1;
        
        }
        
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    setView(view) {
        this.view = view;
    }

    getTodos() {
        return this.todos;
    }

    //retorna el index de un todo
    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
    }

    addTodo(title, description) {
        // crea el objeto todo
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }
        this.todos.push(todo);
        console.log(this.todos);

        //devuelve un clon de ese objeto
        return {...todo};
    }
    removeTodo(id) {
        const index = this.findTodo(id);
        this.todos.splice(index, 1);
    }
}