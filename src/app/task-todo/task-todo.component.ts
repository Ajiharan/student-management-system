import { todoUpdateState } from './../models/TodoState';
import { ITodoGetState, ITodoState } from './../interfaces/TodoInterface';
import {
  todoGetSelector,
  todoSelector,
  todoUpdateSelector,
} from './../state/TodoSelector';
import { Subscription } from 'rxjs';
import {
  addTodoRequest,
  getTodoRequest,
  setDefaultAddTodo,
  updateTodoRequest,
} from './../state/TodoAction';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';
import { TodoState } from '../models/TodoState';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.scss'],
})
export class TaskTodoComponent implements OnInit, OnDestroy {
  TodoFormGroup: FormGroup = new FormGroup({
    Todotitle: new FormControl('', Validators.required),
  });
  todos: TodoState[] = [];
  private subscription: Subscription = new Subscription();
  private wordWrapCount: number = 76;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(getTodoRequest());
    this.getAllTodos();
    this.getTodos();
    this.checkUpdateSuccess();
  }

  checkUpdateSuccess() {
    this.subscription.add(
      this.store
        .select(todoUpdateSelector)
        .pipe(distinctUntilChanged())
        .subscribe(({ error }) => {
          if (error) {
            this.store.dispatch(getTodoRequest());
          }
        })
    );
  }

  getAllTodos() {
    this.subscription.add(
      this.store
        .select(todoGetSelector)
        .pipe(distinctUntilChanged())
        .subscribe((res: ITodoGetState) => {
          this.todos = [...res.data];
          this.todos = this.todos.map((todo: TodoState) => {
            const count = Math.floor(todo.title.length / this.wordWrapCount);
            if (count > 0) {
              for (let i = 0; i < count; i++) {
                todo.title =
                  todo.title.substring(0, this.wordWrapCount * (i + 1)) +
                  '\n' +
                  todo.title.substring(this.wordWrapCount * (i + 1));
              }
            }

            return todo;
          });
          this.todos.sort((b, a) => {
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          });
        })
    );
  }

  checkHandler(event: any, id: string) {
    const todo: TodoState | undefined = this.todos?.find((r) => r._id === id);
    if (todo) {
      if (event?.target?.checked) {
        todo.isFinished = true;
        this.store.dispatch(
          updateTodoRequest({
            payload: { isFinished: todo.isFinished },
            _id: todo._id,
          })
        );
      } else {
        todo.isFinished = false;
        this.store.dispatch(
          updateTodoRequest({
            payload: { isFinished: todo.isFinished },
            _id: todo._id,
          })
        );
      }
    }
  }

  updateTodo(isFinished: boolean, id: string): string {
    // console.log(isFinished);

    if (isFinished) return 'todo-list-item';
    return '';
  }

  getTodos() {
    this.subscription.add(
      this.store
        .select(todoSelector)
        .pipe(distinctUntilChanged())
        .subscribe((res: ITodoState) => {
          if (res.data) {
            this.store.dispatch(setDefaultAddTodo());
            this.store.dispatch(getTodoRequest());
          }
        })
    );
  }

  submitForm() {
    const { Todotitle } = this.TodoFormGroup.value;
    this.store.dispatch(addTodoRequest({ payload: { title: Todotitle } }));
    this.TodoFormGroup.reset();
  }

  checkTitle(): boolean {
    const inputControl: FormControl = this.TodoFormGroup.get(
      'Todotitle'
    ) as FormControl;

    if (inputControl.touched && inputControl.errors) return true;

    return false;
  }
  ngOnDestroy(): void {
    console.log('triggered');
    this.subscription.unsubscribe();
  }
}
