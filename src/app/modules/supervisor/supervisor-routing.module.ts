import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorComponent } from './supervisor.component';
import { MyGeneralNewsComponent } from './components/my-general-news/my-general-news.component';
import { CreateGeneralNewComponent } from './components/create-general-new/create-general-new.component';
import { SupervisorSettingsComponent } from './components/supervisor-settings/supervisor-settings.component';


const routes: Routes = [
  {
    path:'',
    component: SupervisorComponent,
    children:[
      {
        path:'',
        redirectTo:'mis-noticias',
        pathMatch:'full'
      },
      {
        path:'mis-noticias',
        component:MyGeneralNewsComponent
      },
      {
        path:'create-new',
        component:CreateGeneralNewComponent
      },
      {
        path:'ajustes',
        component: SupervisorSettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule { }
