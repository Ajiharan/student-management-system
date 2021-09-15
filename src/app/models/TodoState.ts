export interface TodoState {
  _id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  isFinished: boolean;
}

export type todoAddState = Pick<TodoState, 'title'>;

export type todoUpdateState = Pick<TodoState, 'isFinished'>;
//sd
