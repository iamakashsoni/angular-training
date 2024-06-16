import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../product-model';
import { PRODUCTS } from '../products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products = PRODUCTS;
  @Output() addToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.products)
  }


  onAddToCart(product: ProductModel): void {
    this.addToCart.emit(product);
  }
}
