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
          redirectTo: 'update-school',
          pathMatch: 'full',
        },
        {
          path: 'update-school',
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
