import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cartService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from '../cart-item/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule, CartItemComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(productId: number): void {
  const confirmed = confirm('Are you sure you want to remove this item from the cart?');
  if (confirmed) {
    this.cartService.removeFromCart(productId);
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    alert('Item removed from cart.');
  }
}

  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
