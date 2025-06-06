import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarnewsService {
  private apiKey = '12786d0ce11a4ff713957c28b44822f2';

  private baseUrl = 'https://gnews.io/api/v4/search';

  constructor(private http: HttpClient) {}

  getCarNews(query: string = 'cars') {
    const url = `${this.baseUrl}?q=${encodeURIComponent(query)}&token=${this.apiKey}&lang=en&max=6`;
    return this.http.get<any>(url);
  }
}
