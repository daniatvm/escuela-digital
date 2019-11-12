import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { User } from 'src/app/models/user';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-supervisor-settings',
  templateUrl: './supervisor-settings.component.html',
  styleUrls: ['./supervisor-settings.component.css']
})
export class SupervisorSettingsComponent implements OnInit {

  updateForm: FormGroup;
  updated: boolean = false;
  me: User;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.me = this.loginService.getLocal();
    this.updateForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      new_password_again: ['', [Validators.required]]
    }, {
      validator: MustMatch('new_password', 'new_password_again')
    })
  }

  update() {
    this.updated = true;
    if (this.updateForm.invalid) {
      return;
    } else {
      let data = {
        username: this.me.username,
        password: this.updateForm.value.password,
        new_password: this.updateForm.value.new_password
      }
      this.employeeService.changePassword(data).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            alert('Actualizada');
          } else {
            console.log('Error con la contraseñan anterior.');
          }
        },
        err => {
          console.log(err);
          console.log('Error con laravel');
        }
      );
    }
  }

  get f(){
    return this.updateForm.controls;
  }

}
