import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<{ product: Product, quantity: number }[]>([]);  
  cartItems$ = this.cartItems.asObservable(); 
  cartCount$ = this.cartItems$.pipe(map(items => items.reduce((acc, item) => acc + item.quantity, 0))); 

  getCart() {
    return this.cartItems.value;
  }

  addToCart(product: Product, quantity: number) {
    const currentItems = this.cartItems.value;
    const item = currentItems.find(p => p.product.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      currentItems.push({ product, quantity });
    }
    this.cartItems.next([...currentItems]); 
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value.filter(item => item.product.id !== productId);
    this.cartItems.next(currentItems);
  }

  getTotal(): number {
    return this.cartItems.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  clearCart() {
    this.cartItems.next([]);
  }
}