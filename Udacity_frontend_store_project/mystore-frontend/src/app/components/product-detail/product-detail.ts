import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';
import { CartService } from '../../services/cartService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef  
  ) { }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.loadProduct(id); 
    });
  }

  loadProduct(id: number) {
    this.loading = true;
    this.productService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false; 
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.product = undefined;
        this.loading = false;
        this.cdr.detectChanges();  
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      alert('Product added to cart!');
    }
  }
}