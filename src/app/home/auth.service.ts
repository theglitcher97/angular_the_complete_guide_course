import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;

  public isAuthenticated() {
    return new Promise<boolean>((resolve: Function, reject: Function) => {
      setTimeout(() => resolve(this.isLoggedIn), 800);
    });
  }

  public login() {
    this.isLoggedIn = true;
  }

  public logout() {
    this.isLoggedIn = false;
  }
}
