import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecomendationComponent } from '../recomendation/recomendation.component';
import { Router } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-preference',
  imports: [CommonModule, FormsModule, RecomendationComponent,FormComponent],
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent {
  currentStep = 1;
  constructor(private router: Router) {}
  
  goToStep(step: number) {
    this.currentStep = step;
    console.log('Current step:', this.currentStep);
  }
navigatetohome(){
  this.router.navigate(['/home'])
  console.log('redirects home');
}
}