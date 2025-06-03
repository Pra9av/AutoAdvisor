import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email='';
  password='';
  
  constructor(private authService: AuthService) {}

    register() {
    this.authService.register(this.email, this.password)
      .then(() => alert('Registration successful!'))
      .catch(err => alert('Login failed: ' + err.message));
  }


}
