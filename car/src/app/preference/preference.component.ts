import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent {
  
  constructor(private router: Router) {}

  goToPreferences() {
    this.router.navigate(['/form']);
  }

  browseCars() {
    this.router.navigate(['/recomendation']);
  }

  
}