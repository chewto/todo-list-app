import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { ActiveTodosComponent } from './components/active-todos/active-todos.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';



@NgModule({
  declarations: [
    ActiveTodosComponent,
    AllTodosComponent,
    CompletedTodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
