import {EventEmitter} from 'events';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [];
    }
    
    getAllTodos() {
        return this.todos;
    }
    
    createTodo(id, text) {
        this.todos.push (
            {
                id,
                text,
                completed: false
            }
        )
        this.emit("change");
    }
    
    deleteTodo(id){
        this.todos.splice(id-1, 1);
        this.emit("change");
    }
    
    handleActions(action) {
        if (action.type=="CREATE_TODO") {
                this.createTodo(action.id, action.text);
            }
        if (action.type=="DELETE_TODO"){
                this.deleteTodo(action.id);
            }
    }
}

const todoStore = new TodoStore;

export default todoStore;

TodoDispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = TodoDispatcher;

