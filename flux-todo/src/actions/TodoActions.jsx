import TodoDispatcher from '../dispatcher/TodoDispatcher';

export function createTodo(id, text){
    TodoDispatcher.dispatch({
        type: "CREATE_TODO",
        id,
        text
    })
}

export function deleteTodo(id){
    TodoDispatcher.dispatch({
        type: "DELETE_TODO",
        id
    })
}
