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
import { ClassCrudComponent } from './components/class-crud/class-crud.component';
import { CreateLevelComponent } from './components/create-level/create-level.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { EditGalleryComponent } from './components/edit-gallery/edit-gallery.component';
import { FeedbackCrudComponent } from './components/feedback-crud/feedback-crud.component';



@NgModule({
  declarations: [AdminComponent, UpdateSchoolComponent, AdminNavigationComponent, EmployeesCrudComponent, CreateJobComponent, CreateEmployeeComponent, ClassCrudComponent, CreateLevelComponent, CreateClassComponent, EditEmployeeComponent, AdminSettingsComponent, EditGalleryComponent, FeedbackCrudComponent],
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
