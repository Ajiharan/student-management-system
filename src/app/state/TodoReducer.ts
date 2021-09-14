import { Action, createReducer, on } from '@ngrx/store';
import { ITodoState, ITodoGetState } from '../interfaces/TodoInterface';

import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
  setDefaultAddTodo,
} from './TodoAction';

const initialState: ITodoState = {
  data: null,
  loading: false,
  error: null,
};

const initialTodoGetState: ITodoGetState = {
  data: [],
  error: null,
  loading: false,
};

const todo_reducer = createReducer(
  initialState,
  on(addTodoRequest, (state: ITodoState, action) => {
    return { ...state, data: null, error: null, loading: true };
  }),
  on(addTodoSuccess, (state: ITodoState, action) => {
    return { ...state, data: action.payload, error: null, loading: false };
  }),
  on(addTodoFailure, (state: ITodoState, action) => {
    return { ...state, data: null, loading: false, error: action.error };
  }),
  on(setDefaultAddTodo, (state: ITodoState, action) => {
    return { ...state, data: null, error: null, loading: true };
  })
);

const todo_get_reducer = createReducer(
  initialTodoGetState,
  on(getTodoRequest, (state: ITodoGetState, action) => {
    return { ...state, data: [], error: null, loading: true };
  }),
  on(getTodoSuccess, (state: ITodoGetState, action) => {
    return { ...state, data: action.payload, error: null, loading: false };
  }),
  on(getTodoFailure, (state: ITodoGetState, action) => {
    return { ...state, data: [], loading: false, error: action.error };
  })
);

export function todoReducer(state: ITodoState, action: Action): any {
  return todo_reducer(state, action);
}

export function todoGetReducer(state: ITodoGetState, action: Action): any {
  return todo_get_reducer(state, action);
}
