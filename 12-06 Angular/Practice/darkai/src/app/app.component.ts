import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'darkai';
  name: string[] = ['akash', 'soni'];
  newName: string = '';

  removeName(index: number): void {
    this.name.splice(index, 1);
  }

  addName(item: string): void {
    this.name.push(item);
    this.newName = '';
  }

  sortName(): void {
    this.name.sort((n1, n2) => (n1 == n2 ? 0 : n1 < n2 ? -1 : 1));
  }
}
