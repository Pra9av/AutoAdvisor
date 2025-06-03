import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnDestroy {
  currentIndex = 0;
  intervalId: any;
  totalImages = 6;

  constructor(private router: Router){
    this.currentIndex = 0;
    this.startSlider();
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      if (this.currentIndex < this.totalImages - 1) {
        this.currentIndex++;
      } else {
        this.stopSlider();
      }
    }, 3000);
  }

  stopSlider() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  navigatetopreference() {
    console.log('preference');
    this.router.navigate(['/preference']);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}