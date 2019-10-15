import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  public getSchool()/*: Observable<Object>*/ {
    return this.http.get('http://127.0.0.1:8000/api/school/1');
  }

  public updateSchool(data) {
    return this.http.put('http://127.0.0.1:8000/api/school/1', data);
  }

}
