import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/user-view/user-view.module').then(m => m.UserViewModule)
  },
  /*{
    path:'admin',
    loadChildren: () => import('./modules/').then(m => m.)
  },*/
  {
    path: 'professor',
    loadChildren: () => import('./modules/professor/professor.module').then(m => m.ProfessorModule)
  },
  {
    path: 'supervisor',
    loadChildren: () => import('./modules/supervisor/supervisor.module').then(m => m.SupervisorModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
