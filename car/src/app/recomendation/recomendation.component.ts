import { Component } from '@angular/core';
import { OpenaiService } from '../services/openai.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.scss']
})
export class RecomendationComponent {
  cars: string[] = [
    "Maruti Swift", "Hyundai Creta", "Tata Nexon EV", "Mahindra Thar",
    "Honda City", "Kia Seltos", "Maruti Baleno", "Tata Punch",
    "MG Hector", "Hyundai Verna", "Maruti Brezza", "Toyota Innova","Mahindra Scorpio N",
  "Mahindra XUV700",
  "Kia Sonet",
  "Tata Harrier",
  "Renault Kiger",
  "Hyundai Venue",
  "Skoda Slavia",
  "Volkswagen Virtus",
  "MG Astor",
  "Hyundai i20",
  "Toyota Fortuner",
  "Tata Tiago",
  "Tata Tigor",
  "Maruti Ciaz",
  "Renault Triber",
  "Nissan Magnite",
  "Citroen C3",
  "Honda Amaze",
  "Toyota Urban Cruiser Hyryder",
  "Maruti Grand Vitara", "Jeep Compass" 
  ];

  selectedCar: string = '';
  description: string = '';
  pros: string[] = [];
  cons: string[] = [];
  loading: boolean = false;

  constructor(private openai: OpenaiService,private router: Router) {}

  selectCar(car: string): void {
    this.selectedCar = car;
    this.loading = true;
    this.resetData();
    
    const prompt = `About ${car}:
DESCRIPTION: Brief overview in 2 sentences
PROS: 
• [advantage 1]
• [advantage 2] 
• [advantage 3]
• [advantage 4]
CONS:
• [drawback 1]
• [drawback 2]
• [drawback 3] 
• [drawback 4]`;
    
    this.openai.getCarDetails(prompt).subscribe({
      next: (response: any) => {
        const text = this.extractResponseText(response);
        this.parseResponse(text);
        this.loading = false;
      },
      error: (error: any) => {
        console.error('API Error:', error);
        this.description = 'Error loading car details. Please try again.';
        this.loading = false;
      }
    });
  }

  navigatetohome(){
  this.router.navigate(['/home'])
  console.log('redirects home');
}
  private extractResponseText(response: any): string {
    if (typeof response === 'string') {
      return response;
    }
    if (response?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return response.candidates[0].content.parts[0].text;
    }
    if (response?.text) {
      return response.text;
    }
    if (response?.content) {
      return response.content;
    }
    return 'No response available';
  }

  private parseResponse(text: string): void {
    this.resetData();
    
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    let currentSection = '';
    
    for (const line of lines) {
      if (line.toUpperCase().includes('DESCRIPTION:')) {
        currentSection = 'description';
        const descText = line.split(':')[1]?.trim();
        if (descText) {
          this.description = descText;
        }
      } else if (line.toUpperCase().includes('PROS:')) {
        currentSection = 'pros';
      } else if (line.toUpperCase().includes('CONS:')) {
        currentSection = 'cons';
      } else if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
        const item = line.replace(/^[•\-*]\s*/, '').trim();
        if (item && currentSection === 'pros' && this.pros.length < 4) {
          this.pros.push(item);
        } else if (item && currentSection === 'cons' && this.cons.length < 4) {
          this.cons.push(item);
        }
      } else if (currentSection === 'description' && line && !line.includes(':')) {
        this.description += ' ' + line;
      }
    }

    if (!this.description && !this.pros.length && !this.cons.length) {
      this.description = text;
    }
  }

  private resetData(): void {
    this.description = '';
    this.pros = [];
    this.cons = [];
  }

  goBack(): void {
    this.selectedCar = '';
    this.resetData();
  }
  // goBack2(){
  //   this.router.navigate(['/preference']);
  // }

  trackByCar(index: number, car: string): string {
    return car;
  }

  trackByIndex(index: number, item: string): number {
    return index;
  }
}