import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validate_login(data) {
    return this.http.post('http://127.0.0.1:8000/api/user/authenticate/', data);
  }

  saveLocal(data) {
    localStorage.setItem('user',JSON.stringify(data)); 
  }

  isLogged() {
    return (localStorage.getItem('user') != null); 
  }

  getLocal(){
    return JSON.parse(localStorage.getItem('user'));
  }

  removeLocal(){
    localStorage.clear();
  }

}
