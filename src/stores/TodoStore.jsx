import {EventEmitter} from 'events';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 1,
                text: "Go Shopping",
                completed: true
            },
            {
                id: 2,
                text: "Pay Bills",
                completed: false
            }
        ]
    }
    
    getAllTodos() {
        return this.todos;
    }
    
    createTodo(text) {
        const id = Date.now();
        this.todos.push (
            {
                id,
                text,
                completed: false
            }
        )
        this.emit("change");
    }
    
    handleActions(action) {
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
        }
   }
}

const todoStore = new TodoStore;

export default todoStore;

TodoDispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = TodoDispatcher;

