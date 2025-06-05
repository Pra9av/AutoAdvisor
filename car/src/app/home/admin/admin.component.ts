import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private auth: Auth, private router: Router) {}
   navigatetohome() {
    this.router.navigate(['/home']);
    console.log('redirects home');
  }
   navigatetoref() {
    this.router.navigate(['/recomendation']);
    console.log('redirects to reccomendation');
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
    
  }
}
