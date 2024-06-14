import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FilterTaskComponent } from './filter-task/filter-task.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoComponent, AddTodoComponent, FilterTaskComponent],
})
export class TodoListComponent {
  tasks = [
    {
      id: 1,
      desc: 'Task 1',
      priority: 1,
      status: 'To Do',
    },
    {
      id: 2,
      desc: 'Task 2',
      priority: 2,
      status: 'To Do',
    },
    {
      id: 3,
      desc: 'Task 3',
      priority: 3,
      status: 'To Do',
    },
  ];

  removeToDo(id: any): void {
    console.log(id);
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  addToDo(task: any): void {
    task.id = this.tasks.length + 1;
    console.log(task);
    this.tasks.push(task);
  }

  // updateStatus(id: any): void {
  //   console.log(id);
  // }

  filterByPriority(priority: any) {
    console.log(priority);
    this.tasks = this.tasks.filter((task) => task.priority == priority);
  }
}
