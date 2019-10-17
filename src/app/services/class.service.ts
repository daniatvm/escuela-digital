import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getLevels(){
    return this.http.get('http://localhost:8000/api/level/');
  }

  createLevel(data){
    return this.http.post('http://localhost:8000/api/level/',data);
  }

  createClass(data){
    return this.http.post('http://localhost:8000/api/class/',data);
  }

  getClasses(){    
    return this.http.get('http://localhost:8000/api/class/');
  }

  getClassByEmployee(id){
    return this.http.get(`http://127.0.0.1:8000/api/class/by_employee/${id}`);
  }
  getClassByNotEmployee(id){
    return this.http.get(`http://127.0.0.1:8000/api/class/by_not_employee/${id}`);
  }

  createClassXEmployee(data){
    return this.http.post('http://localhost:8000/api/class_x_employee/',data);
  }
  removeClassXEmployee(id){
    return this.http.delete(`http://127.0.0.1:8000/api/class_x_employee/${id}`);
  }
}
