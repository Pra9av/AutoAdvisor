import { Component } from '@angular/core';
import { Auth,signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
      const user = userCredential.user;
      if (user.email === 'autoadvisor@gmail.com') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/home']);
      }
    })
      .catch((error) => {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials.');
      });

      }
  }
  
  

