import { Component } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  standalone: false,
  templateUrl: './emicalculator.component.html',
  styleUrl: './emicalculator.component.scss'
})
export class EmicalculatorComponent { 
  loanAmount = 0;
  interestRate = 0;
  loanTenure = 0;
  emiResult: number | null = null;

  calculateEMI() {
    const P = this.loanAmount;
    const R = this.interestRate / (12 * 100);
    const N = this.loanTenure;

    if (P <= 0 || R <= 0 || N <= 0) {
      this.emiResult = null;
      return;
    }

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    this.emiResult = Math.round(emi);
  }
}

