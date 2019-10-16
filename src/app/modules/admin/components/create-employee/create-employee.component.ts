import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Job } from 'src/app/models/job';
import { Access } from 'src/app/models/access';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  submitted: boolean = false;

  jobs: Job[];
  jobSelected: Job;

  accesses: Access[];
  accessSelect: Access;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadJobs();
    this.loadAccess();
    this.employeeForm = this.formBuilder.group({
      job: [null, [Validators.required]],
      access: [null, [Validators.required]],
      name: ['', [Validators.required]],//
      last_name: ['', [Validators.required]],//
      second_last_name: ['', [Validators.required]],//
      image: ['', [Validators.required]],
      id_card: ['', [Validators.required]]
    });
  }

  /*onChange(e) {
    console.log(e);
    console.log(this.employeeForm.value.job.id_job);
  }
  onChange2(e) {
    console.log(e);
    console.log(this.employeeForm.value.access.id_access_type);
  }*/

  createEmployee() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    } else {
      var employee = {
        id_job: this.employeeForm.value.job.id_job,
        id_school: 1,
        name: this.employeeForm.value.name,
        last_name: this.employeeForm.value.last_name,
        second_last_name: this.employeeForm.value.second_last_name,
        image: this.employeeForm.value.image,
        id_card: this.employeeForm.value.id_card,
        status: 1
      }
      this.employeeService.createEmployee(employee).subscribe(
        res => {
          var r: any = res;
          if (r.success) {
            var user = {
              id_employee: r.data,
              id_access_type: this.employeeForm.value.access.id_access_type,
              username: this.employeeForm.value.id_card,
              password: this.employeeForm.value.id_card,
              status: 1
            }
            this.employeeService.createUser(user).subscribe(
              res => {
                console.log(res);
                //hacer algo cuando creo el user
              },
              err => {
                console.log('error laravel');
              }
            );
          } else {
            console.log('error laravel');
          }

        },
        err => {
          console.log('error laravel');
        }
      );
    }
  }

  get f() {
    return this.employeeForm.controls;
  }

  loadJobs() {
    this.employeeService.getJobs().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.jobs = r.data;
          this.jobSelected = this.jobs[0];
          //console.log(this.jobs);
          //console.log(this.jobSelected);
        } else {
          console.log('Erro de laravel');
        }

      },
      err => {
        console.log(err);
        console.log('Erro de laravel');
      }
    );
  }

  loadAccess() {
    this.employeeService.getAccess().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.accesses = r.data;
          this.accessSelect = this.accesses[0];
          //console.log(this.accesses);
          //console.log(this.accessSelect);
        } else {
          console.log('Erro de laravel');
        }

      },
      err => {
        console.log(err);
        console.log('Erro de laravel');
      }
    );
  }


}
