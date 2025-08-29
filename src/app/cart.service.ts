import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: any) {
    const current = this.cartItems.value;
    this.cartItems.next([...current, product]);
  }

  removeFromCart(productId: number) {
    const current = [...this.cartItems.value];
    const index = current.findIndex(p => p.id === productId);
    if (index !== -1) {
      current.splice(index, 1); 
      this.cartItems.next(current);
    }
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getTotal() {
    return this.cartItems.value.reduce((acc, item) => acc + item.price, 0);
  }

  getItems() {
    return this.cartItems.value;
  }  
}
