import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  get f() { return this.formLogin.controls }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    } else {

      //validation with services

      if (this.formLogin.value.username == "admin") {
        this.router.navigate(['admin/general-news']);
      } else {
        if (this.formLogin.value.username == "profesor") {
          this.router.navigate(['professor']);
        } else {
          alert("No tiene acceso");
        }
      }
    }
  }

}
