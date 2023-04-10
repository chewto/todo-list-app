import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-no-todos',
  templateUrl: './no-todos.component.html',
  styleUrls: ['./no-todos.component.scss']
})
export class NoTodosComponent {
  @Input() pageMessage = '';
}
