import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { api } from "./url.constants";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getJobs() {
    return this.http.get(`${api}/job/`);
  }

  createJob(data) {
    return this.http.post(`${api}/job/`, data);
  }

  getAccess() {
    return this.http.get(`${api}/access_type/`);
  }

  getEmployeeByJob(id_job) {
    return this.http.get(`${api}/employee/by_job/${id_job}`);
  }

  getEmployees() {
    return this.http.get(`${api}/employee/`);
  }

  getEmployeeByIdEmployee(id_employee) {
    return this.http.get(`${api}/employee/${id_employee}`);
  }

  createEmployee(data) {
    return this.http.post(`${api}/employee/`, data);
  }
  createUser(data) {
    return this.http.post(`${api}/user/`, data);
  }

  resetPassword(data) {
    return this.http.post(`${api}/user/reset_password/`, data);
  }
  
  changePassword(data) {
    return this.http.post(`${api}/user/change_password/`, data);
  }

}
