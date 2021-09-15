import { createAction, props } from '@ngrx/store';
import { TodoEnum } from '../enums/TodoEnums';
import { todoAddState, TodoState, todoUpdateState } from '../models/TodoState';

export const addTodoRequest = createAction(
  TodoEnum.ADD_TODO_REQUEST,
  props<{ payload: todoAddState }>()
);

export const addTodoSuccess = createAction(
  TodoEnum.ADD_TODO_SUCCESS,
  props<{ payload: TodoState }>()
);

export const addTodoFailure = createAction(
  TodoEnum.ADD_TODO_FAILURE,
  props<{ error: any }>()
);

export const setDefaultAddTodo = createAction(TodoEnum.SET_TODO_DEFAULT);

export const getTodoRequest = createAction(TodoEnum.GET_TODO_REQUEST);

export const getTodoSuccess = createAction(
  TodoEnum.GET_TODO_SUCCESS,
  props<{ payload: TodoState[] }>()
);

export const getTodoFailure = createAction(
  TodoEnum.GET_TODO_FAILURE,
  props<{ error: any }>()
);

export const updateTodoRequest = createAction(
  TodoEnum.UPDATE_TODO_REQUEST,
  props<{ payload: todoUpdateState; _id: any }>()
);
export const updateTodoSuccess = createAction(
  TodoEnum.UPDATE_TODO_SUCCESS,
  props<{ payload: TodoState }>()
);
export const updateTodoFailure = createAction(
  TodoEnum.UPDATE_TODO_FAILURE,
  props<{ error: any }>()
);
