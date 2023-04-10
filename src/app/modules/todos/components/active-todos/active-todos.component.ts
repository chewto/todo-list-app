import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from './../../../../models/todos.model';
import { TodoService } from './../../../../services/todo.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-active-todos',
  templateUrl: './active-todos.component.html',
  styleUrls: ['./active-todos.component.scss']
})
export class ActiveTodosComponent implements OnInit, OnDestroy{

  public activeTodos:Todo[] = [];
  public pageMessage = "no active todo's available";
  private destroySuscription$ = new Subject<void>();

  constructor(private todoSVC:TodoService){}

  ngOnInit(): void {
    this.todoSVC.getAllTodos().pipe(
      takeUntil(this.destroySuscription$)
    ).subscribe((res:Todo[])=>{
      res.forEach(element => {
        if(element.isComplete == false){
          this.activeTodos.push(element);
        }
      })
    })
  }

  public addTodo(todo:Todo){
    console.log(todo)
    this.activeTodos.push(todo);
  }

  public onChangeActive(todo:Todo){

    todo.isComplete = !todo.isComplete

    const todoPut:Todo = {
      id:todo.id,
      name:todo.name,
      isComplete:todo.isComplete
    }

    this.todoSVC.updateTodo(todoPut, todo.id).subscribe();
  }

  ngOnDestroy(): void {
    this.destroySuscription$.next();
    this.destroySuscription$.unsubscribe();
  }
}
