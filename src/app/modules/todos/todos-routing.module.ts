import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { ActiveTodosComponent } from './components/active-todos/active-todos.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';

const routes: Routes = [
  {
    path:'',
    component: AllTodosComponent
  },
  {
    path:'active',
    component:ActiveTodosComponent
  },
  {
    path:'completed',
    component: CompletedTodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
