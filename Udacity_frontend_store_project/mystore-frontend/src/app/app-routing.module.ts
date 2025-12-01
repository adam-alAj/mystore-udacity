import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { CartComponent } from './components/cart/cart';
import { CheckoutComponent } from './components/checkout/checkout';
import { ConfirmationComponent } from './components/confirmation/confirmation';
import { ContactComponent } from './components/contact/contact';
import { AuthComponent } from './components/auth/auth';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent,canActivate: [authGuard] },
  { path: 'checkout', component: CheckoutComponent,canActivate: [authGuard] },
  { path: 'confirmation', component: ConfirmationComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'auth', component: AuthComponent },
];

