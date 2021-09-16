import { createSelector } from '@ngrx/store';
import { ITodoState, ITodoGetState } from '../interfaces/TodoInterface';

export interface AppState {
  todoDetails: ITodoState;
  todoGetDetails: ITodoGetState;
  todoUpdateDetails: ITodoState;
  todoGetDetailsOnDate: ITodoGetState;
}

export const getTodosByDate = (state: AppState) => state.todoGetDetailsOnDate;
export const addTodo = (state: AppState) => state.todoDetails;

export const updateTodo = (state: AppState) => state.todoUpdateDetails;

export const getTodos = (state: AppState) => state.todoGetDetails;
export const todoSelector = createSelector(
  addTodo,
  (state: ITodoState) => state
);

export const getTodoOnDateSelector = createSelector(
  getTodosByDate,
  (state: ITodoGetState) => state
);
export const todoGetSelector = createSelector(
  getTodos,
  (state: ITodoGetState) => state
);

export const todoUpdateSelector = createSelector(
  updateTodo,
  (state: ITodoState) => state
);
