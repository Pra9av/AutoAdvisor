import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  async canActivate(): Promise<boolean> {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert('You must be logged in.');
      this.router.navigate(['/login']);
      return false;
    }

    if (user.email === 'autoadvisor@gmail.com') {
      return true;
    } else {
      alert('Access Denied! Admins only.');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
