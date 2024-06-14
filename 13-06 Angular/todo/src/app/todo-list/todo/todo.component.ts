import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo: any;
  @Output() remove = new EventEmitter();
  
  removeToDo(todoID: number): void {
    this.remove.emit(todoID);
  }
}
