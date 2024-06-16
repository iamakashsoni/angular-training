import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output() addToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
