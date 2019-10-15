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
    this.submitted = true;
    if (this.jobCreate.invalid) {
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
            this.router.navigate(['/','admin','empleados']);
          } else {
            r
            console.log('Errores con laravel');
          }
        },
        err => {
          console.log(err);
          console.log('Errores con laravel');
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
