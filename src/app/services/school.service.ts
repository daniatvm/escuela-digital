import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { api } from './url.constants'

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  public getSchool() {
    return this.http.get(`${api}/school/1`);
  }

  public updateSchool(data) {
    return this.http.put(`${api}/school/1`, data);
  }

}
