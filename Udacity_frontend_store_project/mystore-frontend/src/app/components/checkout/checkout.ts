import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cartService';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-checkout',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
})
export class CheckoutComponent {
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(public cartService: CartService, public router: Router) {}

  submitOrder(): void {
    if (!this.fullName || !this.address || !this.creditCard || this.creditCard.length < 16) {
      alert('Please fill all fields correctly.');
      return;
    }

    this.cartService.clearCart();
    this.router.navigate(['/confirmation'], {
      queryParams: { name: this.fullName, total: this.cartService.getTotal() }
    });
  }

}
