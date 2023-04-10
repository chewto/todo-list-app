import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { ActiveTodosComponent } from './components/active-todos/active-todos.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { TodoInputComponent } from 'src/app/shared/components/todo-input/todo-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoTodosComponent } from 'src/app/shared/components/no-todos/no-todos.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';



@NgModule({
  declarations: [
    ActiveTodosComponent,
    AllTodosComponent,
    CompletedTodosComponent,
    TodoInputComponent,
    NoTodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class TodosModule { }
