import {EventEmitter} from 'events';

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
    
    getTodos() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

export default todoStore;
