import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReaderComponent } from './components/reader/reader.component';
import { WriterComponent } from './components/writer/writer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReaderComponent, WriterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngRx-demo';
}
