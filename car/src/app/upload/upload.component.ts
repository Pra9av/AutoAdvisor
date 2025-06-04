import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {

  constructor(private firestoreService: FirestoreService) {}

  uploadJson(event: any) {
    console.log('File selected:', event.target.files[0]);

    const file = event.target.files[0];
    if (!file) {
      alert('No file selected!');
      return;
    }

    const reader = new FileReader();

    reader.onload = async (e: any) => {
      console.log('File read successfully.');
      const carsArray = JSON.parse(e.target.result);
      console.log('JSON parsed:', carsArray);

      for (const car of carsArray) {
        console.log('Uploading car:', car);
        await this.firestoreService.addCar(car);
      }

      alert('All cars uploaded to Firestore!');
    };

    reader.onerror = (e) => {
      console.error('Error reading file:', e);
    };

    reader.readAsText(file);
  }
}
