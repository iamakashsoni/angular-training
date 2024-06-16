import { Component, Input } from '@angular/core';
import { ProductModel } from '../product-model';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() cartItems: ProductModel[] = [];
  
}
