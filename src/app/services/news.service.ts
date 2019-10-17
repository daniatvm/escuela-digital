import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  createNew(data) {
    return this.http.post('http://localhost:8000/api/new/', data);
  }

  getNewByForeing(u,t,c) {
    return this.http.get(`http://localhost:8000/api/new/by_specific/${u}/${t}/${c}`);
  }

}
