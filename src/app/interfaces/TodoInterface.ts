import { TodoState, todoUpdateState } from '../models/TodoState';

export interface ITodoState {
  data: TodoState | null;
  loading: boolean;
  error: any;
}

export interface ITodoGetState {
  data: TodoState[];
  loading: boolean;
  error: any;
}

export interface ITodoUpdateState {
  data: TodoState | null;
  loading: boolean;
  error: any;
}

//sd
