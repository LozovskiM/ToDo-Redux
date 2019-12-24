import { ADD_TODO, GET_TODOS, DELETE_TODO } from '../actions/actionType';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            let id;
            if (state.length === 0) {
                id = 0;
            } else {
                id = state[state.length - 1].id + 1;
            }
            return [ ...state, {
                title: action.payload,
                id: id
            } ];
        case GET_TODOS:
            return state;
        case DELETE_TODO:
            return state.filter(item=> item.id !== action.payload);
        default:
            return state;
    }
};
