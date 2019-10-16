import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Job } from 'src/app/models/job';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Level } from 'src/app/models/level';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees-crud',
  templateUrl: './employees-crud.component.html',
  styleUrls: ['./employees-crud.component.css']
})
export class EmployeesCrudComponent implements OnInit {

  jobs: Job[];
  jobSelected: Job;
  jobFilter: FormGroup;
  submittedJob: boolean = false;

  /*levels: Level[];
  levelSelected: Level;
  levelFilter: FormGroup;*/

  employees: Employee[];



  submittedClass: boolean = false;


  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadJobs();

    this.jobFilter = this.formBuilder.group({
      job: [null, [Validators.required]]
    });

  }

  filterByJob() {
    this.submittedJob = true;
    if (this.jobFilter.invalid) {
      return;
    } else {
      this.employeeService.
        getEmployeeByJob(this.jobFilter.value.job.id_job).
        subscribe(
          res => {
            let r: any = res;
            if (r.success) {
              this.employees = r.data;
            } else {
              this.employees = [];
            }

          },
          err => {
            console.log(err);
            console.log('error de laravel');
          }
        )
    }
  }

  loadJobs() {
    this.employeeService.getJobs().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.jobs = r.data;
          this.jobSelected = this.jobs[0];
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

  get jobC() {
    return this.jobFilter.controls;
  }

  resetPassword(e) {
    let data = {
      id_employee:e.value
    }
    this.employeeService.resetPassword(data).subscribe(
      res => {
        let r:any = res;
        if(r.success){
          alert('Reseteada');
        }else{
          alert('no Reseteada');
        }
      },
      err => {
        console.log(err);
        console.log('Erro con laravel');
      }
    );
  }

  foo(ele) {
    console.log(ele.value);

  }

}
