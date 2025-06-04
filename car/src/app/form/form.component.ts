import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  preferenceForm!: FormGroup;
  cars: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private carService: CarService) {}

  ngOnInit() {
    this.preferenceForm = this.fb.group({
      fuel: [''],
      seller_type: [''],
      transmission: [''],
      selling_price: [''],
      year: ['']
    });
  }

  onSubmit() {
    const preferences = this.preferenceForm.value;
    console.log('Submitted Preferences:', preferences);

    this.carService.getCarsByPreferences(preferences).subscribe(data => {
      this.cars = data;
      console.log('Filtered Cars:', this.cars);
    });
  }

  // goBack() {
  //   this.router.navigate(['/preference']);
  // }
  navigatetohome(){
  this.router.navigate(['/home'])
  console.log('redirects home');
}
}