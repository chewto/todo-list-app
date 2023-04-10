import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTodosComponent } from './no-todos.component';

describe('NoTodosComponent', () => {
  let component: NoTodosComponent;
  let fixture: ComponentFixture<NoTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
