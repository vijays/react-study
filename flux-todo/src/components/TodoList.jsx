import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions'; //import all actions

export default class TodoList extends React.Component{
    constructor() {
        super();

        this.state = {
            todo_count: 0,
            todo_id: 0,
            todo_string: "",
            todos: TodoStore.getAllTodos()
        }
    }
    
    
    componentWillMount(){
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAllTodos()
            })
        })
    }
    
    handleTodoString(event) {
        this.setState({todo_string: event.target.value});
    }
    
    handleTodoId(event) {
        this.setState({todo_id: event.target.value});
    }

    createTodo(){
        this.state.todo_count++;
        TodoActions.createTodo(this.state.todo_count, this.state.todo_string);
    }
    
    deleteTodo(){
        TodoActions.deleteTodo(this.state.todo_id);
    }

    render() {
        const {todos} = this.state;
        const TodoComponents = todos.map(
            (todo) => {return <Todo key={todo.id} {...todo} />;}
        );
        
        return (
            <div>
                <input type="text" value={this.state.todo_string} onChange={this.handleTodoString.bind(this)}/>
                <button onClick={this.createTodo.bind(this)}>Create Todo</button>
                <h2>Todos</h2>
                <ul>{TodoComponents}</ul>
                <input type="text" value={this.state.todo_id} onChange={this.handleTodoId.bind(this)}/>
                <button onClick={this.deleteTodo.bind(this)}>Delete Todo</button>
            </div>
        )
    }
}
