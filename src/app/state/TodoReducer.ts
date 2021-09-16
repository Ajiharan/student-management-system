import { Action, createReducer, on } from '@ngrx/store';
import {
  ITodoState,
  ITodoGetState,
  ITodoUpdateState,
} from '../interfaces/TodoInterface';

import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
  setDefaultAddTodo,
  updateTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  getTodoFailureOnDate,
  getTodoRequestOnDate,
  getTodoSuccessOnDate,
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
  on(addTodoRequest, (state: any, action) => {
    return { ...state, data: null, error: null, loading: true };
  }),
  on(addTodoSuccess, (state: ITodoState, action) => {
    return { ...state, data: action.payload, error: null, loading: false };
  }),
  on(addTodoFailure, (state: any, action) => {
    return { ...state, data: null, loading: false, error: action.error };
  }),
  on(setDefaultAddTodo, (state: any, action) => {
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

const todo_update_reducer = createReducer(
  initialState,
  on(updateTodoRequest, (state: any, action) => {
    return { ...state, data: null, error: null, loading: true };
  }),
  on(updateTodoSuccess, (state: ITodoState, action) => {
    return { ...state, data: action.payload, error: null, loading: false };
  }),
  on(updateTodoFailure, (state: any, action) => {
    return { ...state, data: null, loading: false, error: action.error };
  })
);

const todo_get_reducer_ondate = createReducer(
  initialTodoGetState,
  on(getTodoRequestOnDate, (state: ITodoGetState, action) => {
    return { ...state, data: [], error: null, loading: true };
  }),
  on(getTodoSuccessOnDate, (state: ITodoGetState, action) => {
    return { ...state, data: action.payload, error: null, loading: false };
  }),
  on(getTodoFailureOnDate, (state: ITodoGetState, action) => {
    return { ...state, data: [], loading: false, error: action.error };
  })
);

export function todoGetReducerOnDate(
  state: ITodoGetState,
  action: Action
): any {
  return todo_get_reducer_ondate(state, action);
}

export function todoReducer(state: ITodoState, action: Action): any {
  return todo_reducer(state, action);
}

export function todoGetReducer(state: ITodoGetState, action: Action): any {
  return todo_get_reducer(state, action);
}

export function todoUpdateReducer(state: ITodoState, action: Action): any {
  return todo_update_reducer(state, action);
}
