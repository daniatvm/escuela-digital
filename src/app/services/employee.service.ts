import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getJobs(){
    return this.http.get('http://localhost:8000/api/job/');
  }

  createJob(data){
    return this.http.post('http://localhost:8000/api/job/',data);
  }

}
