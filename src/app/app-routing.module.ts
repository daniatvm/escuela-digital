import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';
import { SupervisorGuard } from './guards/supervisor.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/user-view/user-view.module').then(m => m.UserViewModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'professor',
    loadChildren: () => import('./modules/professor/professor.module').then(m => m.ProfessorModule)
  },
  {
    path: 'supervisor',
    loadChildren: () => import('./modules/supervisor/supervisor.module').then(m => m.SupervisorModule),
    canActivate: [SupervisorGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
