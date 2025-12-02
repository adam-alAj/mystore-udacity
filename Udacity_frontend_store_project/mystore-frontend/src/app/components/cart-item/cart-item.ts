import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.html',
  styleUrls: ['./cart-item.css']
})
export class CartItemComponent {
  @Input() item: any;
  @Output() removed = new EventEmitter<number>();

  onRemove() {
    this.removed.emit(this.item.product.id);
  }
}