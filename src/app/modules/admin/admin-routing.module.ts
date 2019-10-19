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
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { EditGalleryComponent } from './components/edit-gallery/edit-gallery.component';
import { FeedbackCrudComponent } from './components/feedback-crud/feedback-crud.component';


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
          path: 'editar-empleado/:id_employee',
          component: EditEmployeeComponent
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
        },
        {
          path:'ajustes',
          component:AdminSettingsComponent
        },
        {
          path:'galeria',
          component:EditGalleryComponent
        },
        {
          path:'feedback',
          component:FeedbackCrudComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
