import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../../models/products.model';
import { Store } from '@ngrx/store';
import { add, clear } from '../../store/product/product.actions';

@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css',
})
export class WriterComponent {
  data: Products = {
    id: 0,
    name: '',
    price: 0,
    brand: '',
  };

  constructor(private store: Store) {}
  addProduct(): void {
    this.store.dispatch(add({ product: this.data }));
  }

  clearProduct(): void {
    this.store.dispatch(clear());
  }
}
