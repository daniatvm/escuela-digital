import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { MySpecificNewsComponent } from './components/my-specific-news/my-specific-news.component';
import { CreateSpecificNewComponent } from './components/create-specific-new/create-specific-new.component';
import { ProfessorSettingsComponent } from './components/professor-settings/professor-settings.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorComponent,
    children: [
      {
        path: '',
        redirectTo: 'mis-noticias',
        pathMatch: 'full'
      },
      {
        path: 'mis-noticias',
        component: MySpecificNewsComponent
      },
      {
        path: 'crear-noticia',
        component: CreateSpecificNewComponent
      },
      {
        path: 'ajustes',
        component: ProfessorSettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
