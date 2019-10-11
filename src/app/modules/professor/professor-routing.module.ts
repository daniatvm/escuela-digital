import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { CreateSpecificNewComponent } from './components/create-specific-new/create-specific-new.component';
import { MySpecificNewsComponent } from './components/my-specific-news/my-specific-news.component';
import { ProfessorSettingsComponent } from './components/professor-settings/professor-settings.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorComponent,
    children:
      [
        {
          path: '',
          redirectTo: 'crear',
          pathMatch: 'full',
        },
        {
          path: 'crear',
          component: CreateSpecificNewComponent
        },
        {
          path: 'mis-publicaciones',
          component: MySpecificNewsComponent
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
