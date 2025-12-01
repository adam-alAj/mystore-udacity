import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent {
  email = '';
  password = '';
  isLoginMode = true;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (this.isLoginMode) {
      const success = this.auth.login(this.email, this.password);
      if (success) {
        this.router.navigate(['/']);
      } else {
        alert('Invalid credentials');
      }
    } else {
      this.auth.signup(this.email, this.password);
      alert('Account created! Please log in.');
      this.isLoginMode = true;
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}