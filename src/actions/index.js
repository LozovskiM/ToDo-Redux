import { GET_TODOS, ADD_TODO, DELETE_TODO } from './actionType';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const getTodos = () => {
    return {
        type: GET_TODOS
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
};
