export interface TodoState {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export type todoAddState = Pick<TodoState, 'title'>;
