import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  async addCar(car: any) {
    const carsRef = collection(this.firestore, 'cars'); // 'cars' is your collection name
    await addDoc(carsRef, car);
  }
}
