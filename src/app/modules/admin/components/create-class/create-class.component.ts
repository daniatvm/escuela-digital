import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';
import { Job } from 'src/app/models/job';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

  levels: Level[];
  levelSelect: Level;

  jobs: Job[];
  jobSelected: Job;

  employees: Employee[];
  employeeSelect:Employee;


  submitted: boolean = false;

  classForm: FormGroup;

  constructor(private classServices: ClassService, private formBuilder: FormBuilder, private employeeService:EmployeeService) { }

  ngOnInit() {
    this.loadLevels();
    //this.loadJobs();
    this.loadEmployees();
    this.classForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      level: [null, [Validators.required]],
      //job: [null, [Validators.required]],
      employee:[null, [Validators.required]]
    });
  }


  createClass() {
    this.submitted = true;
    if (this.classForm.invalid) {
      return;
    } else {
      let data = {
        name: this.classForm.value.name,
        id_level: this.classForm.value.level.id_level,
        id_employee:this.classForm.value.employee.id_employee,
        type:0
      }
      this.classServices.createClass(data).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            alert('clase creada');
          } else {
            console.log('error al crear la clase')
          }

        },
        err => {
          console.log(err);
          console.log('Error contectando con laravel.');
        }
      );
    }
  }

  loadLevels() {
    this.classServices.getLevels().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.levels = r.data;
          console.log(this.levels);
        } else {
          console.log('No hay niveles creados');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    );
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

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.employees = r.data;
          this.employeeSelect = this.employees[0];
          console.log(this.employees)
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

  get f() {
    return this.classForm.controls;
  }

}
