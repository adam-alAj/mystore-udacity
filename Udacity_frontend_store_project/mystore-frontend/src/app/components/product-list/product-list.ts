import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loading = true;
    console.log('ngOnInit fired');
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log("Products received:", data);
        this.products = [...data.map(p => ({ ...p, price: +p.price }))];
        this.loading = false;
        this.cdr.detectChanges();  
      },

      error: (err) => {
        console.error("API Error", err);
        this.products = [];
        this.loading = false;
        this.cdr.detectChanges();  
      }
    });
  }
}