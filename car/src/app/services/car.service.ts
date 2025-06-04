import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, collectionData, limit, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private firestore: Firestore) { }

  getCarsByPreferences(preferences: any): Observable<any[]> {
    const carsCollection = collection(this.firestore, 'cars');
    let conditions: any[] = [];

    if (preferences.fuel) {
      conditions.push(where('fuel', '==', preferences.fuel));
    }
    if (preferences.seller_type) {
      conditions.push(where('sellerType', '==', preferences.seller_type));
    }
    if (preferences.transmission) {
      conditions.push(where('transmission', '==', preferences.transmission));
    }
    if (preferences.selling_price) {
      conditions.push(where('selling_price', '<=', Number(preferences.selling_price)));
    }
    if (preferences.year) {
      conditions.push(where('year', '<=', Number(preferences.year)));
    }

    const q = query(carsCollection, ...conditions, orderBy('selling_price', 'asc'), limit(8));

    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }
}