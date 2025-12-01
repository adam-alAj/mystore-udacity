import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CartService } from './services/cartService';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   constructor(public cartService: CartService, public auth: AuthService) {}
}
