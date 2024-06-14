import { Component } from '@angular/core';
import { PipesExampleComponent } from "./pipe-example/pipe-example.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [PipesExampleComponent]
})
export class AppComponent {
  title = 'pipe';
}
