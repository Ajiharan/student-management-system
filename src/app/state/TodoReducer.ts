import { Action, createReducer, on } from '@ngrx/store';
import { TodoState } from '../models/TodoState';
import { addTodoFailure, addTodoRequest, addTodoSuccess } from './TodoAction';

export interface ITodoState {
  data: TodoState | null;
  loading: boolean;
  error: any;
}

const initialState: ITodoState = {
  data: null,
  loading: false,
  error: null,
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
  })
);

export function todoReducer(state: ITodoState, action: Action): any {
  return todoReducer(state, action);
}
