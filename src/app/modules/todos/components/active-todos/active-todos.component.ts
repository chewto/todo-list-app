import { Component, OnInit } from '@angular/core';
import { Todo } from './../../../../models/todos.model';
import { TodoService } from './../../../../services/todo.service';

@Component({
  selector: 'app-active-todos',
  templateUrl: './active-todos.component.html',
  styleUrls: ['./active-todos.component.scss']
})
export class ActiveTodosComponent implements OnInit{

  public activeTodos!:Todo[];

  constructor(private todoSVC:TodoService){}

  ngOnInit(): void {
    this.todoSVC.getAllTodos().subscribe((res:Todo[])=>{
      this.activeTodos = res;
      console.log(this.activeTodos)
    })
  }
}
