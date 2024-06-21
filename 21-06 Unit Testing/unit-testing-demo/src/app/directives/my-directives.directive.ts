import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirectives]',
  standalone: true,
})
export class MyDirectivesDirective {
  constructor(private h1: ElementRef) {
    console.log("directive called")
    h1.nativeElement.style.background = 'red';
    h1.nativeElement.style.color = 'yellow';
  }
}
