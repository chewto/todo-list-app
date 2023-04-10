import { SpeechRecognitionService } from './../../../services/speech-recognition.service';
import { TodoService } from './../../../services/todo.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todos.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent{

  @Output() todoOut = new EventEmitter<Todo>();
  public todoFromInput!:Todo;
  public voiceInput!: Subject<string>;

  constructor(
    private todoSVC:TodoService,
    private speechRecognitionSVC:SpeechRecognitionService
  ){
    this.speechRecognitionSVC.start();
  }

  public todoInput = new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public sendTodo(event:any){
    event.preventDefault();

    const infoTodo = {
      name: this.todoInput.value,
      isComplete: false
    };
    this.todoSVC.postTodo(infoTodo).subscribe( (res:Todo) => {
      this.todoFromInput = res;
      this.todoOut.emit(this.todoFromInput);
    });
  }

  public voiceTodo(){
    this.speechRecognitionSVC.hear();
    this.speechRecognitionSVC.text$.subscribe(res => {
      this.todoInput.setValue(res);
    })
  }
}
