import {ADD_TODO, DELETE_TODO, MARKCOMPLETE_TODO} from '../action/action.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter(s => s.id !== action.payload);

    case MARKCOMPLETE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    default:
      return state;
  }
};
