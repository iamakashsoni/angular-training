import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-task.component.html',
  styleUrl: './filter-task.component.css',
})
export class FilterTaskComponent {
  @Output() priorityFilter = new EventEmitter();

  priorityFilters = [
    { id: 1, priority: 'High' },
    { id: 2, priority: 'Medium' },
    { id: 3, priority: 'Low' },
  ];
  priority: number = 0;

  statusFilters = ['To do', 'In Progress', 'Done'];
  status: string = 'To do';

  updatePriorityStatus() {
    this.priorityFilter.emit(this.priority);
  }
}
