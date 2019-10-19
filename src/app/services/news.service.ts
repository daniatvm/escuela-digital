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

  getNewByGeneral(u,t,) {
    return this.http.get(`http://localhost:8000/api/new/by_general/${u}/${t}/`);
  }
  
  getNewByNewType(t) {
    return this.http.get(`http://localhost:8000/api/new/by_new_type/${t}/`);
  }

  getNewByClass(c) {
    return this.http.get(`http://localhost:8000/api/new/by_class/${c}/`);
  }

}
