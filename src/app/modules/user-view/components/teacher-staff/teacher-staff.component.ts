import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Job } from 'src/app/models/job';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Level } from 'src/app/models/level';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-staff',
  templateUrl: './teacher-staff.component.html',
  styleUrls: ['./teacher-staff.component.css']
})
export class TeacherStaffComponent implements OnInit {


  jobs: Job[];
  jobSelected: Job;
  jobFilter: FormGroup;
  submittedJob: boolean = false;

  msg: string;

  /*levels: Level[];
  levelSelected: Level;
  levelFilter: FormGroup;*/

  employees: Employee[];



  submittedClass: boolean = false;


  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loadJobs();

    this.jobFilter = this.formBuilder.group({
      job: [null, [Validators.required]]
    });

  }

  filterByJob() {
    this.msg = "";
    this.submittedJob = true;
    if (this.jobFilter.invalid) {
      this.msg = "Errores en la solicitud.";
      return;
    } else {
      this.employeeService.
        getEmployeeByJob(this.jobFilter.value.job.id_job).
        subscribe(
          res => {
            let r: any = res;
            if (r.success) {
              console.log(r.data)
              this.employees = r.data;
              this.msg = "Consulta exitosa!";
            } else {
              this.employees = [];
              this.msg = "No hay empleados creados para este puesto";
            }

          },
          err => {
            this.msg = "Error en la coneccion con laravel.";
            console.log(err);
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

}
