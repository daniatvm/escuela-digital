import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './user-view.component';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { TeacherStaffComponent } from './components/teacher-staff/teacher-staff.component';
import { ExecutivesStaffComponent } from './components/executives-staff/executives-staff.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { AgmCoreModule } from '@agm/core';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

import { ReactiveFormsModule, FormsModule }  from '@angular/forms';

@NgModule({
  declarations: [UserViewComponent, HomeComponent, GroupsComponent, TeacherStaffComponent, ExecutivesStaffComponent, GalleryComponent, ContactComponent, LoginComponent, UserNavigationComponent, UserFooterComponent, FeedbackFormComponent],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmHbK8wxJ6KS-fzKRBQIsTTSZkqxaGyks'
    })/* key de Google Maps */,
  ]
})
export class UserViewModule { }
