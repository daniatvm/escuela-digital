import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UpdateSchoolComponent } from './components/update-school/update-school.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:
      [
        {
          path: '',
          redirectTo: 'escuela',
          pathMatch: 'full',
        },
        {
          path: 'escuela',
          component: UpdateSchoolComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
