import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.scss'],
})
export class TaskTodoComponent implements OnInit {
  TodoFormGroup: FormGroup = new FormGroup({
    Todotitle: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    console.log(this.TodoFormGroup.value);
    this.TodoFormGroup.reset();
  }

  checkTitle(): boolean {
    const inputControl: FormControl = this.TodoFormGroup.get(
      'Todotitle'
    ) as FormControl;

    if (inputControl.touched && inputControl.errors) return true;

    return false;
  }
}
