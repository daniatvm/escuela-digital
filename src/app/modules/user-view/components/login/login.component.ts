import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private loginServices: LoginService) { }

  get f() { return this.formLogin.controls }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    } else {

      var data = {
        username: this.formLogin.value.username,
        password: this.formLogin.value.password,
      };

      this.loginServices.validate_login(data).subscribe(
        res => {

          var response: any = res;
          if (response.success) {
            var data: any = (response.data);
            if (data.id_access_type == 1) {
              this.loginServices.saveLocal(data);
              this.router.navigate(['admin']);
            }
          } else {
            alert('Credenciales incorrectas');
          }
        },
        err => {
          console.error(err)
        }
      )
    }
  }

}
