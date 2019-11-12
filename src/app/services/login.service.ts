import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { api } from './url.constants'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validate_login(data) {
    return this.http.post(`${api}/user/authenticate/`, data);
  }

  saveLocal(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  isLogged() {
    return (localStorage.getItem('user') != null);
  }

  getLocal() {
    return JSON.parse(localStorage.getItem('user'));
  }

  removeLocal() {
    localStorage.removeItem('user');
  }

}
