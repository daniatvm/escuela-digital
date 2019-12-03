import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { api } from './url.constants'
@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getLevels() {
    return this.http.get(`${api}/level/`);
  }

  createLevel(data) {
    return this.http.post(`${api}/level/`, data);
  }

  createClass(data) {
    return this.http.post(`${api}/class/`, data);
  }

  getClasses() {
    return this.http.get(`${api}/class/`);
  }

  getClassByEmployee(id) {
    return this.http.get(`${api}/class/by_employee/${id}`);
  }
  getClassByNotEmployee(id) {
    return this.http.get(`${api}/class/by_not_employee/${id}`);
  }

  createClassXEmployee(data) {
    return this.http.post(`${api}/class_x_employee/`, data);
  }
  removeClassXEmployee(id) {
    return this.http.delete(`${api}/class_x_employee/${id}`);
  }

  getClassByLevel(id){
    return this.http.get(`${api}/class/by_level/${id}`);
  }
}
