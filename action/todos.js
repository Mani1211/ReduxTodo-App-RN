import {ADD_TODO, DELETE_TODO, MARKCOMPLETE_TODO} from './action.types';

export const addTodo = season => ({
  type: ADD_TODO,
  payload: season,
});
export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});
export const marCompleteTodo = id => ({
  type: MARKCOMPLETE_TODO,
  payload: id,
});
