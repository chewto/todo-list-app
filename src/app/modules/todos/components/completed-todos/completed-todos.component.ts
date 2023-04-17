import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from './../../../../models/todos.model';
import { TodoService } from './../../../../services/todo.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit, OnDestroy{

  public completedTodos:Todo[] = [];
  public pageMessage = "no completed todo's available";
  private destroySuscription$ = new Subject<void>();

  constructor(private todoSVC:TodoService){}

  ngOnInit(): void {
    this.todoSVC.getAllTodos().pipe(
      takeUntil(this.destroySuscription$)
    ).subscribe( (res:Todo[])=>{
      res.forEach(element => {
        if(element.isComplete){
          this.completedTodos.push(element);
        }
      })
    })
  }

  public onDeleteTodo(id:number | undefined){
    this.todoSVC.deleteTodo(id).subscribe(res => console.log(res));
    this.completedTodos = this.completedTodos.filter( todo => todo.id != id);
    location.reload();
  }

  ngOnDestroy(): void {
    this.destroySuscription$.next();
    this.destroySuscription$.unsubscribe();
  }
}
