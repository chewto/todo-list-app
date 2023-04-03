import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiURL = 'https://localhost:7140/TodoItems';

  constructor(private http:HttpClient) { }

  public getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiURL);
  }

  public postTodo(todo:Todo): Observable<Todo>{
    return this.http.post<Todo>(this.apiURL, todo);
  }

  public deleteTodo(id:number | undefined):Observable<unknown>{
    this.apiURL = `${this.apiURL}/${id}`;
    return this.http.delete(this.apiURL);
  }

}
