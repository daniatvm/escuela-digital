import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorRoutingModule } from './supervisor-routing.module';
import { SupervisorComponent } from './supervisor.component';
import { CreateGeneralNewComponent } from './components/create-general-new/create-general-new.component';
import { MyGeneralNewsComponent } from './components/my-general-news/my-general-news.component';
import { SupervisorSettingsComponent } from './components/supervisor-settings/supervisor-settings.component';
import { SupervisorNavigationComponent } from './components/supervisor-navigation/supervisor-navigation.component';



@NgModule({
  declarations: [SupervisorComponent, CreateGeneralNewComponent, MyGeneralNewsComponent, SupervisorSettingsComponent, SupervisorNavigationComponent ],
  imports: [
    CommonModule,
    SupervisorRoutingModule
  ]
})
export class SupervisorModule { }
