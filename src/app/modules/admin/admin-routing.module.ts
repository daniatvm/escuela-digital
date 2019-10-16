import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UpdateSchoolComponent } from './components/update-school/update-school.component';
import { EmployeesCrudComponent } from './components/employees-crud/employees-crud.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ClassCrudComponent } from './components/class-crud/class-crud.component';
import { CreateLevelComponent } from './components/create-level/create-level.component';
import { CreateClassComponent } from './components/create-class/create-class.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:
      [
        {
          path: '',
          redirectTo: 'escuela',
          pathMatch: 'full',
        },
        {
          path: 'escuela',
          component: UpdateSchoolComponent
        },
        {
          path: 'empleados',
          component: EmployeesCrudComponent
        },
        {
          path: 'crear-puesto',
          component: CreateJobComponent
        },
        {
          path: 'crear-empleado',
          component: CreateEmployeeComponent
        },
        {
          path: 'clases',
          component: ClassCrudComponent
        },
        {
          path:'crear-nivel',
          component: CreateLevelComponent
        },
        {
          path:'crear-clases',
          component: CreateClassComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
