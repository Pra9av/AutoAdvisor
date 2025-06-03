import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Auth,onAuthStateChanged,User} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  isAuthChecked = false;

constructor(private router: Router,private auth:Auth) {}

ngOnInit() {
console.log('Checking auth state...');
    
    onAuthStateChanged(this.auth, (user: User | null) => {
      this.isLoggedIn = !!user;
      this.isAuthChecked = true;
      console.log('Auth check complete. Logged in', this.isLoggedIn);
      if(user) {
        alert('logged in successfully!!');
      }
    });
  }


navigatetohome(){
  this.router.navigate(['/home'])
  console.log('redirects home');
}
navigatetologin() {
    console.log('login');
    this.router.navigate(['/login']);
  }

navigatetoregister() {
    console.log('register');
    
    this.router.navigate(['/register']);
  }
  
logout() {
    this.auth.signOut().then(() => {
      this.isLoggedIn = false;
      this.router.navigate(['/home']);
    });


}
}

