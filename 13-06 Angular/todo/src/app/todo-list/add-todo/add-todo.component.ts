import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterTaskComponent } from "../filter-task/filter-task.component";

@Component({
    selector: 'app-add-todo',
    standalone: true,
    templateUrl: './add-todo.component.html',
    styleUrl: './add-todo.component.css',
    imports: [FormsModule, FilterTaskComponent]
})
export class AddTodoComponent {
  // task: any = {};
  todo: any = {};
  taskDesc: string = '';
  taskPriority: number = 3;

  @Output() add = new EventEmitter();

  addTask(): void {
    this.todo = { desc: this.taskDesc, priority: this.taskPriority };
    this.add.emit(this.todo);
  }
}
