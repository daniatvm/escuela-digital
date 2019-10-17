import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ClassService } from 'src/app/services/class.service';
import { Class } from 'src/app/models/class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;

  ownClasses: Class[];
  ownClass: Class;

  notOwnClasses: Class[];
  notOwnClass: Class;

  addClass: FormGroup;
  addS: boolean = false;

  removeClass: FormGroup;
  removeS: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private classService: ClassService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      let p: any = params.get('id_employee');
      this.getEmployee(p);
    });

    this.addClass = this.formBuilder.group({
      class: [null, [Validators.required]]
    });
    this.removeClass = this.formBuilder.group({
      class: [null, [Validators.required]]
    });
  }

  add() {
    this.addS = true;
    if (this.addClass.invalid) {
      return;
    } else {
      let data = {
        id_class: this.addClass.value.class.id_class,
        id_employee: this.employee.id_employee,
        type: 0
      }
      this.classService.createClassXEmployee(data).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            this.getClasses(this.employee.id_employee);
          } else {
            console.log('Error al crear');
          }
        },
        err => {
          console.log(err);
          console.log('Error con laravel');
        }
      );

    }
  }

  remove() {
    this.removeS = true;
    if (this.removeClass.invalid) {
      return;
    } else {
      this.classService.removeClassXEmployee(this.removeClass.value.class.id_class_x_employee).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            this.getClasses(this.employee.id_employee);
          } else {
            console.log('Error con eliminar');
          }
        },
        err => {
          console.log(err);
          console.log('Error con laravel');
        }
      )

    }
  }
  getEmployee(id) {
    this.employeeService.getEmployeeByIdEmployee(id).subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          this.employee = r.data[0];
          this.getClasses(this.employee.id_employee);
        } else {
          console.log('Ese usuario no existe.');
        }
      },
      err => {
        console.log('Error con laravel');
        console.log(err);
      }
    );
  }

  getClasses(id) {
    this.addClass.patchValue({
      class: null
      // formControlName2: myValue2 (can be omitted)
    });
    this.removeClass.patchValue({
      class: null
      // formControlName2: myValue2 (can be omitted)
    });
    this.classService.getClassByEmployee(id).subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          console.log(r.data);
          this.ownClasses = r.data;
          this.ownClass = this.ownClasses[0];
        } else {
          console.log('No hay clases asociadas.');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    );

    this.classService.getClassByNotEmployee(id).subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          this.notOwnClasses = r.data;
          this.notOwnClass = this.notOwnClasses[0];
        } else {
          console.log('No hay clases asociadas.');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    );
  }

  get f() {
    return this.removeClass.controls;
  }

  get g() {
    return this.addClass.controls;
  }
}
