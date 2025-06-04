import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  preferenceForm: FormGroup;
    form="";


  constructor(private fb: FormBuilder,private router:Router ) {
    this.preferenceForm = this.fb.group({
      fuel: [''],
      sellerType: [''],
      transmission: [''],
      maxPrice: [''],
      maxKmDriven: ['']
    });
  }

  onSubmit() {
    const preferences = this.preferenceForm.value;
    console.log('User Preferences:', preferences);
  }
  goBack(){
    this.router.navigate(['/preference']);
  }
  }

