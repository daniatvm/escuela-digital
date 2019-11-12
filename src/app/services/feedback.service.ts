import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { api } from "./url.constants";
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  sendSuggestion(data) {
    return this.http.post(`${api}/feedback/`, data);
  }
  sendQuery(data) {
    return this.http.post(`${api}/feedback/`, data);
  }

  getFeedback() {
    return this.http.get(`${api}/feedback`);
  }
}
