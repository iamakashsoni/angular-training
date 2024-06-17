import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
})
export class TemplateDrivenComponent {
  countryList: country[] = [
    new country('1', 'INDIA'),
    new country('2', 'UAE'),
    new country('3', 'USA'),
  ];
  
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}
