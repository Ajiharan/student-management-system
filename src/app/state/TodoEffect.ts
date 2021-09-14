import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';
import { TodoState } from '../models/TodoState';

import { TodoService } from '../services/todo.service';

import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
} from './TodoAction';

@Injectable()
export class todoEffect {
  addTodoEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(addTodoRequest),
      exhaustMap((action) => {
        // console.log('action', action);
        return this.todoService.addTodo(action.payload).pipe(
          map((response: TodoState) => {
            console.log('response', response);
            return addTodoSuccess({
              payload: {
                _id: response._id,
                createdAt: response.createdAt,
                title: response.title,
                updatedAt: response.updatedAt,
                isFinished: response.isFinished,
              },
            });
          }),
          catchError((err) => of(addTodoFailure({ error: err })))
        );
      })
    )
  );

  getTodosEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(getTodoRequest),
      exhaustMap((action) => {
        return this.todoService.getTodos().pipe(
          map((response: TodoState[]) => {
            console.log('response', response);
            return getTodoSuccess({
              payload: response,
            });
          }),
          catchError((err) => of(getTodoFailure({ error: err })))
        );
      })
    )
  );

  constructor(private todoService: TodoService, private action$: Actions) {}
}
