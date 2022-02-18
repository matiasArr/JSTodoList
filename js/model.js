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

    setView(view) {
        this.view = view;
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos() {
        return this.todos.map((todo) => ({...todo}));
    }

    //retorna el index de un "todo"
    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    //no persiste los cambios hecho en el toggle
    editTodo(id, values) {
        const index = this.findTodo(id);
        // modifica solamente los valores
        Object.assign(this.todos[index], values);
        this.save();
    }

    toggleCompleted(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();
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
        this.save();

        //devuelve un clon de ese objeto
        return {...todo};
    }

    removeTodo(id) {
        const index = this.findTodo(id);
        //elimina solo el todo correspondiente al id
        this.todos.splice(index, 1);
        this.save();
    }
}