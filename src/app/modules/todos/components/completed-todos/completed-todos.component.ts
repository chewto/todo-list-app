import { Component, OnInit } from '@angular/core';
import { Todo } from './../../../../models/todos.model';
import { TodoService } from './../../../../services/todo.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit{

  public completedTodos!:Todo[];

  constructor(private todoSVC:TodoService){}

  ngOnInit(): void {
    this.todoSVC.getAllTodos().subscribe( (res:Todo[])=>{
      this.completedTodos = res;
    })
  }

  public deleteTodo(id:number | undefined){
    this.todoSVC.deleteTodo(id).subscribe(res => console.log(res));
    this.completedTodos = this.completedTodos.filter( todo => todo.id != id);
    location.reload();
  }
}
