import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UpdateSchoolComponent } from './components/update-school/update-school.component';
import { EmployeesCrudComponent } from './components/employees-crud/employees-crud.component';
import { CreateJobComponent } from './components/create-job/create-job.component';


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
          path: 'job',
          component: CreateJobComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
