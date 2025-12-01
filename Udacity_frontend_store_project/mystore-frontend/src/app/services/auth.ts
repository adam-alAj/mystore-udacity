import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private usersKey = 'users';
  private tokenKey = 'token';

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem(this.tokenKey, 'fake-jwt-token');
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  signup(email: string, password: string): void {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    users.push({ email, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedInSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}