import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartService = inject(CartService);
  items$ = this.cartService.cartItems$;

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  clear() {
    this.cartService.clearCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
