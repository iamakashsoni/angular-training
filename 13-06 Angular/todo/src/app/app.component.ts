import { Component } from '@angular/core';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { EcommerceComponent } from './ecommerce/ecommerce.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [TodoListComponent, EcommerceComponent]
})
export class AppComponent {
  title = 'todo';
}
