import { TodoService } from './../../../services/todo.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todos.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent{

  @Output() todoOut = new EventEmitter<Todo>();
  public todoFromInput!:Todo;

  constructor(private todoSVC:TodoService){}

  public todoInput = new FormGroup({
    todo: new FormControl('')
  })

  public sendTodo(){

    const infoTodo = {
      name: this.todoInput.get('todo')?.value,
      isComplete: false
    };
    this.todoSVC.postTodo(infoTodo).subscribe( (res:Todo) => {
      this.todoFromInput = res;
      this.todoOut.emit(this.todoFromInput);
    });
  }
}
