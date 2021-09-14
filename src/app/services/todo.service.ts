import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todoAddState } from '../models/TodoState';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl: String = 'http://localhost:5000/todo/';
  constructor(private http: HttpClient) {}

  addTodo(todo: todoAddState) {
    return this.http.post(`${this.baseUrl}/addTodo`, todo);
  }
}
