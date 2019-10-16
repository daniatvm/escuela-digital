import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getJobs() {
    return this.http.get('http://localhost:8000/api/job/');
  }

  createJob(data) {
    return this.http.post('http://localhost:8000/api/job/', data);
  }

  getAccess() {
    return this.http.get('http://localhost:8000/api/access_type/');
  }

  getEmployeeByJob(id_job){
    return this.http.get(`http://127.0.0.1:8000/api/employee/by_job/${id_job}`);
  }

  createEmployee(data) {
    return this.http.post('http://127.0.0.1:8000/api/employee/', data);
  }
  createUser(data) {
    return this.http.post('http://127.0.0.1:8000/api/user/', data);
  }

}
