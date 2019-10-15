import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Job } from 'src/app/models/job';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Level } from 'src/app/models/level';

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

  levels: Level[];
  levelSelected: Level;
  levelFilter: FormGroup;



  submittedClass: boolean = false;


  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadJobs();

    this.jobFilter = this.formBuilder.group({
      job: [null, [Validators.required]]
    });

  }





  onChange(e) {
    console.log(e);
    //console.log(this.jobFilter.value.job.id_job);

  }

  filterByJob() {
    this.submittedJob = true;
    if (this.jobFilter.invalid) {
      return;
    } else {
      alert(`Filtrar por ${this.jobFilter.value.job.id_job}`)
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

  get jobC() {
    return this.jobFilter.controls;
  }

}
