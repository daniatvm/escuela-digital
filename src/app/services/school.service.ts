import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  getSchool() {
    return this.http.get('http://localhost:8000/api/access_type/bar/1');
  }

}
