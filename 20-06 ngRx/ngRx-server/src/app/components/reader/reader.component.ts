import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { productState } from '../../store/product/product.selector';
import { JsonPipe } from '@angular/common';
import { remove } from '../../store/product/product.actions';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css',
})
export class ReaderComponent implements OnInit {
  product: Products[] = [];
  product$: Observable<Products[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.product$ = this.store.pipe(select(productState));
    this.product$.subscribe((data) => (this.product = data));
  }

  removeProduct(id: number) {
    this.store.dispatch(remove({ id: id }));
  }
}
