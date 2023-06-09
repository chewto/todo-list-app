import { SpeechSynthesisService } from './../../../../services/speech-synthesis.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from './../../../../models/todos.model';
import { TodoService } from './../../../../services/todo.service';
import { Subject, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit, OnDestroy{

  public todos:Todo[] = [];
  public pageMessage = "no todo's available"
  private destroySuscription$ = new Subject<void>();
  public langList:string[] = ['es-ES','en-US'];
  public langInput = new FormControl('en-US');

  constructor(
    private todoSVC:TodoService,
    private speechSynthesisSVC:SpeechSynthesisService
  ){}

  ngOnInit(): void {
    this.todoSVC.getAllTodos().pipe(
      takeUntil(this.destroySuscription$)
    ).subscribe((res:Todo[]) => {
      this.todos = res;
      console.log(this.todos)
    })
  }

  public onVoiceSelect(){
    const language:any = this.langInput.value;
    console.log(language)
    this.speechSynthesisSVC.language = language;
  }

  public addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo);
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onSpeak(text:any){
    this.speechSynthesisSVC.talk(text);
  }

  ngOnDestroy(): void {
    this.destroySuscription$.next();
    this.destroySuscription$.unsubscribe;
  }
}
