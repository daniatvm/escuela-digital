import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UpdateSchoolComponent } from './components/update-school/update-school.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { EmployeesCrudComponent } from './components/employees-crud/employees-crud.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';



@NgModule({
  declarations: [AdminComponent, UpdateSchoolComponent, AdminNavigationComponent, EmployeesCrudComponent, CreateJobComponent, CreateEmployeeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmHbK8wxJ6KS-fzKRBQIsTTSZkqxaGyks'
    })/* key de Google Maps */,
  ]
})
export class AdminModule { }
