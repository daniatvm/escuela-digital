import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view.component';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { TeacherStaffComponent } from './components/teacher-staff/teacher-staff.component';
import { ExecutivesStaffComponent } from './components/executives-staff/executives-staff.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: UserViewComponent,
    children: [
      {
        path: '',
        redirectTo: '/Inicio',
        pathMatch: 'full'
      },
      {
        path: 'Inicio',
        component: HomeComponent
      },
      {
        path: 'Grupos',
        component: GroupsComponent
      },
      {
        path: 'Docentes',
        component: TeacherStaffComponent
      },
      {
        path: 'Junta-Educacion',
        component: ExecutivesStaffComponent
      },
      {
        path: 'Galeria',
        component: GalleryComponent
      },
      {
        path: 'Contacto',
        component: ContactComponent
      },
      {
        path: 'Acceso',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }
