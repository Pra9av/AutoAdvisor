import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class OpenaiService {
  private apiUrl = "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=AIzaSyAIda2BX0hzgN_XguyOj5qoj1uvbNKZoo4";

  constructor(private http: HttpClient) {}

  getCarDetails(carName: string) {
    const prompt = `${carName}.Provide a summary in the following format:
1. *Description: description of the car.
2. *Pros: List three pros as bullet points.
3. *Cons: List three cons as bullet points.
Keep it clear and easy to read.`;
    return this.http.post(this.apiUrl, {
      contents: [{ parts: [{ text: prompt }] }]
    });
  }
}
