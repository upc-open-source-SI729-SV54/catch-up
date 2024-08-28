import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = '7dd4442ad84642768511a09c74f5ff5b';
  baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`);
  }
}
