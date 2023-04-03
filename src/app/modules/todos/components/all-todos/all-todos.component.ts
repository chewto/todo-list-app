import { Component, OnInit } from '@angular/core';
import { Todo } from './../../../../models/todos.model';
import { TodoService } from './../../../../services/todo.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit{

  public todos!:Todo[];

  constructor(private todoSVC:TodoService){}

  ngOnInit(): void {
    this.todoSVC.getAllTodos().subscribe((res) => {
      this.todos = res;
      console.log(this.todos)
    })
  }

  public addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo);
  }
}
