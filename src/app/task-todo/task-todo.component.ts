import { addTodoRequest, getTodoRequest } from './../state/TodoAction';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.scss'],
})
export class TaskTodoComponent implements OnInit {
  TodoFormGroup: FormGroup = new FormGroup({
    Todotitle: new FormControl('', Validators.required),
  });
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(getTodoRequest());
  }

  submitForm() {
    const { Todotitle } = this.TodoFormGroup.value;
    this.store.dispatch(addTodoRequest({ payload: { title: Todotitle } }));
    setTimeout(() => {
      this.TodoFormGroup.reset();
    }, 0);
  }

  checkTitle(): boolean {
    const inputControl: FormControl = this.TodoFormGroup.get(
      'Todotitle'
    ) as FormControl;

    if (inputControl.touched && inputControl.errors) return true;

    return false;
  }
}
