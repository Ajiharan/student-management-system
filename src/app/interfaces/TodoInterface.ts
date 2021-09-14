import { TodoState } from '../models/TodoState';

export interface ITodoState {
  data: TodoState | null;
  loading: boolean;
  error: any;
}

export interface ITodoGetState {
  data: TodoState[] | null;
  loading: boolean;
  error: any;
}
