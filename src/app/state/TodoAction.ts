import { createAction, props } from '@ngrx/store';
import { TodoEnum } from '../enums/TodoEnums';
import { todoAddState, TodoState } from '../models/TodoState';

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

export const getTodoRequest = createAction(TodoEnum.GET_TODO_REQUEST);

export const getTodoSuccess = createAction(
  TodoEnum.GET_TODO_SUCCESS,
  props<{ payload: TodoState[] }>()
);

export const getTodoFailure = createAction(
  TodoEnum.GET_TODO_FAILURE,
  props<{ error: any }>()
);
