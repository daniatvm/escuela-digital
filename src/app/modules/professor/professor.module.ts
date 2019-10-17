import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';
import { CreateSpecificNewComponent } from './components/create-specific-new/create-specific-new.component';
import { MySpecificNewsComponent } from './components/my-specific-news/my-specific-news.component';
import { ProfessorSettingsComponent } from './components/professor-settings/professor-settings.component';
import { ProfessorNavigationComponent } from './components/professor-navigation/professor-navigation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfessorComponent, CreateSpecificNewComponent, MySpecificNewsComponent, ProfessorSettingsComponent, ProfessorNavigationComponent ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfessorModule { }
