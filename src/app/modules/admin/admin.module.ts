import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UpdateSchoolComponent } from './components/update-school/update-school.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';


@NgModule({
  declarations: [AdminComponent, UpdateSchoolComponent, AdminNavigationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
