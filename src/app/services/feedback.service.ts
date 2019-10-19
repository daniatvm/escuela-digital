import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  sendSuggestion(data) {
    return this.http.post('http://127.0.0.1:8000/api/feedback/', data);
  }
  sendQuery(data) {
    return this.http.post('http://127.0.0.1:8000/api/feedback/', data);
  }

  getFeedback(){
    return this.http.get('http://localhost:8000/api/feedback');
  }
}
