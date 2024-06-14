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
  title = 'arrayOfObject';

  arr: any = [
    { name: 'Akash', age: 24 },
    { name: 'Kalpesh', age: 25 },
    { name: 'xyz', age: 35 },
  ];

  addPerson(name: string, age: string) {
    this.arr.push({ name: name, age: age });
  }
  removeName(index: number): void {
    this.arr.splice(index, 1);
  }
}
