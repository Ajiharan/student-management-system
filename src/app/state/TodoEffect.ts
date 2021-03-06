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
  updateTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  getTodoFailureOnDate,
  getTodoRequestOnDate,
  getTodoSuccessOnDate,
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

  updateTodoEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateTodoRequest),
      mergeMap((action) => {
        // console.log('action', action);
        return this.todoService.updateTodo(action._id, action.payload).pipe(
          map((response: TodoState) => {
            return updateTodoSuccess({
              payload: {
                _id: response._id,
                createdAt: response.createdAt,
                title: response.title,
                updatedAt: response.updatedAt,
                isFinished: response.isFinished,
              },
            });
          }),
          catchError((err) => of(updateTodoFailure({ error: err })))
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
            // console.log('response', response);
            return getTodoSuccess({
              payload: response,
            });
          }),
          catchError((err) => of(getTodoFailure({ error: err })))
        );
      })
    )
  );

  getTodosOnDateEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(getTodoRequestOnDate),
      exhaustMap((action) => {
        return this.todoService.getTodosOnDate(action.date).pipe(
          map((response: TodoState[]) => {
            // console.log('response', response);
            return getTodoSuccessOnDate({
              payload: response,
            });
          }),
          catchError((err) => of(getTodoFailureOnDate({ error: err })))
        );
      })
    )
  );

  constructor(private todoService: TodoService, private action$: Actions) {}
}
