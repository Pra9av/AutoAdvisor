import { Component } from '@angular/core';
import { OpenaiService } from '../services/openai.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recomendation',
  imports: [FormsModule, CommonModule],
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.scss']
})
export class RecomendationComponent {
  activeStep = 'carSelection';
  cars = [
    "Maruti Suzuki Swift",
    "Hyundai Creta",
    "Tata Nexon EV",
    "Mahindra Thar",
    "Honda City",
    "Kia Seltos",
    "Maruti Suzuki Baleno",
    "Tata Punch",
    "MG Hector",
    "Hyundai Verna",
    "Maruti Suzuki Brezza",
    "Toyota Innova Crysta",
    "Renault Kiger",
    "Hyundai Venue",
    "Mahindra XUV700",
    "Tata Altroz",
    "Kia Sonet",
    "Skoda Slavia",
    "Volkswagen Virtus",
    "Honda Amaze",
    "Force Gurkha",
    "Nissan Magnite",
    "Citroen C3 Aircross",
    "Toyota Fortuner",
    "Isuzu V-Cross",
    "Jeep Compass",
    "Skoda Kushaq",
    "Volkswagen Taigun",
    "Tata Harrier",
    "Hyundai Exter",
    "Maruti Suzuki Fronx",
    "Tata Safari",
    "Mahindra Scorpio-N",
    "Kia Carens",
    "Hyundai Alcazar",
    "Honda Elevate",
    "Toyota Urban Cruiser Hyryder",
    "MG Astor",
    "Mahindra Bolero Neo",
    "Renault Triber",
    "Maruti Suzuki Ciaz",
    "Tata Tigor EV",
    "Hyundai Grand i10 NIOS",
    "Kia Carnival",
    "Isuzu MU-X",
    "Jeep Meridian",
    "Skoda Superb",
    "Volkswagen Tiguan",
    "Omega Blaze",
    "Indigo Falcon",
    "Maruti Invicto",
    "Tata Aria",
    "Hyundai Tucson",
    "Ford EcoSport",
    "Toyota Yaris",
    "Chevrolet Trailblazer",
    "Datsun Redi-GO",
    "Fiat Linea",
    "Renault Lodgy",
    "Mahindra KUV100",
    "Tata Hexa",
    "Hyundai i20",
    "Kia EV6",
    "MG ZS EV",
    "Toyota Glanza",
    "Nissan Kicks",
    "Force Trax Cruiser",
    "Tata Venture",
    "Hyundai Sonata",
    "Maruti Ritz",
    "Skoda Rapid",
    "Volkswagen Polo",
    "Honda WR-V",
    "Tata Indigo",
    "Maruti SX4",
    "Mahindra e-Verito",
    "Isuzu D-Max",
    "Jeep Grand Cherokee",
    "Mahindra Alturas G4",
    "Chevrolet Beat",
    "Fiat Punto",
    "Honda Jazz",
    "Hyundai Santro",
    "Maruti WagonR",
    "Tata Tiago",
    "Kia Rio",
    "MG Gloster",
    "Renault Captur",
    "Toyota Corolla Altis",
    "Hyundai Elantra",
    "Volkswagen Vento",
    "Nissan Sunny",
    "Ford Figo",
    "Skoda Octavia",
    "Honda Brio",
    "Chevrolet Cruze",
    "Tata Nano",
    "Maruti Zen",
    "Premier Padmini"
  ];

  selectedCar = '';
  carDetails = '';
  isLoading = false;

  constructor(private openai: OpenaiService) {
    console.log('RecomendationComponent initialized ', );
  }

  trackByCar(index: number, car: string): string {
    return car;
  }

  viewDetails(car: string) {
    console.log('Car selected:', car);
    this.selectedCar = car;
    this.isLoading = true;
    this.carDetails = ''; 
    
    this.openai.getCarDetails(car).subscribe({
      next: (res: any) => {
        console.log('API Response:', res);
        this.carDetails = res.candidates?.[0]?.content?.parts?.[0]?.text || 'No details available';
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Gemini API Error:', err);
        this.carDetails = 'Error fetching car details. Please try again.';
        this.isLoading = false;
      }
    });
  }

  clearSelection() {
    this.selectedCar = '';
    this.carDetails = '';
    this.isLoading = false;
  }
}