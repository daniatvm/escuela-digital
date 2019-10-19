import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/app/models/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  jobs: Job[];
  jobSelected: Job;
  submitted: boolean = false;

  msg:string;

  jobCreate: FormGroup;

  constructor(private router: Router,private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadJobs();
    this.jobCreate = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Z][A-Z a-z]*$')]]
    });
  }

  get f() {
    return this.jobCreate.controls;
  }


  createJob() {
    this.msg = "";
    this.submitted = true;
    if (this.jobCreate.invalid) {
      this.msg = "Hay errores en la solicitud";
      return;
    } else {
      var data = {
        name: this.jobCreate.value.name
      }
      console.log(data);
      this.employeeService.createJob(data).subscribe(
        res => {
          var r: any = res;
          if (r.success) {
            this.msg = "Puesto creado.";
          } else {
            this.msg = "No se pudo crear el puesto.";
          }
        },
        err => {
          this.msg = "No se contectar con laravel.";
          console.log(err);
        }
      );
    }
  }

  loadJobs() {
    this.employeeService.getJobs().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.jobs = r.data;
          this.jobSelected = this.jobs[0];
          console.log(this.jobs);
          console.log(this.jobSelected);
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
