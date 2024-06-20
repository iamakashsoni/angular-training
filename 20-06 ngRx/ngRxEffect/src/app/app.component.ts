import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addData, loadData } from './store/people/people.actions';
import { State, Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { peopleSelector } from './store/people/people.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Person } from './models/Person.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  requestData: Person = {
    id: 0,
    fname: '',
    lname: '',
  };

  data$ = this.store.pipe(select(peopleSelector));
  data: any;

  constructor(private store: Store, private actions$: Actions) {}

  ngOnInit() {
    this.store.dispatch(loadData());
    this.data$.subscribe((data) => (this.data = data));
  }

  addProduct(): void {
    this.store.dispatch(addData({ payload: this.requestData }));
    this.data$.subscribe((data) => (this.data = data));
  }
}
