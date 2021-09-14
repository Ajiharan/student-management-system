import { createSelector } from '@ngrx/store';
import { ITodoState, ITodoGetState } from '../interfaces/TodoInterface';

export interface AppState {
  todoDetails: ITodoState;
  todoGetDetails: ITodoGetState;
}

export const addTodo = (state: AppState) => state.todoDetails;

export const getTodos = (state: AppState) => state.todoGetDetails;
export const todoSelector = createSelector(
  addTodo,
  (state: ITodoState) => state
);

export const todoGetSelector = createSelector(
  getTodos,
  (state: ITodoGetState) => state
);
