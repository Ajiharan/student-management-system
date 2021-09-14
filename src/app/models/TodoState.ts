export interface TodoState {
  _id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  isFinished: boolean;
}

export type todoAddState = Pick<TodoState, 'title'>;
