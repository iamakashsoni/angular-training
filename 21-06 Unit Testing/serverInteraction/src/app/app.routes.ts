import { Routes } from '@angular/router';
import { ReaderComponent } from './components/reader/reader.component';
import { WriterComponent } from './components/writer/writer.component';

export const routes: Routes = [
  {
    path: 'reader',
    component: ReaderComponent,
  },
  {
    path: 'writer',
    component: WriterComponent,
  },
];
