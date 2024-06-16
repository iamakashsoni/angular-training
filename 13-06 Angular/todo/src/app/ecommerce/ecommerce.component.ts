import { Component } from '@angular/core';
import { ProductModel } from './product-model';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';


@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [CartComponent, ProductListComponent, FormsModule, ProductItemComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
  title = 'ecommerce-app';

  cartItems: ProductModel[] = [];

  onAddToCart(product: any): void {
    this.cartItems.push(product);
  }
}
