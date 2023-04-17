import { SpeechRecognitionService } from './../../../services/speech-recognition.service';
import { TodoService } from './../../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todos.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit{

  @Output() todoOut = new EventEmitter<Todo>();
  public todoFromInput!:Todo;
  public langList:string[] = ['es-ES','en-US'];
  public langInput = new FormControl('en-US');
  public todoInput = new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]);

  constructor(
    private todoSVC:TodoService,
    private speechRecognitionSVC:SpeechRecognitionService
  ){
    this.speechRecognitionSVC.start();
  }

  ngOnInit(): void {
    this.speechRecognitionSVC.recognition.lang = this.langInput.value;
  }

  public onVoiceSelect(){
    const language:any = this.langInput.value;
    this.speechRecognitionSVC.recognition.lang = language;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onSendTodo(event:any){
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

  public onVoiceTodo(){
    this.speechRecognitionSVC.hear();
    this.speechRecognitionSVC.text$.subscribe(res => {
      this.todoInput.setValue(res);
      console.log(res);
    })
  }

}
