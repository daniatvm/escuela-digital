import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Board } from 'src/app/models/board';

@Component({
  selector: 'app-executives-staff',
  templateUrl: './executives-staff.component.html',
  styleUrls: ['./executives-staff.component.css']
})
export class ExecutivesStaffComponent implements OnInit {

  executives: Employee[];
  board:Board;

  constructor() { }

  ngOnInit() {
    this.loadExecutives();
    this.loadBoard();
  }

  loadBoard(){
    this.board = {
      description: 'El consejo de administración o directorio es una de las formas que puede adoptar el órgano de administración y de representación de una sociedad mercantil. En el derecho español, es la forma que se ha de elegir siempre que la administración de la sociedad se confíe conjuntamente a más de dos personas. Grupo de personas que pertenecen a una empresa, o a una institución, y son los que dirigen la misma, esta formada por presidente, vice presidente, tesorero, secretario, secretario de actas, vocales titulares y vocales suplentes.',
      email: 'junta@yahoo.es',
      telephone: '2536-5145'
    }
  }

  loadExecutives() {
    this.executives = [
      {
        id_employee: 1,
        id_job: 2,
        //cellphone: '9442-8566',
        //job_name: 'Miembro de la Junta de Educacion.',
        name: "Marco Segura Matarrita",
        //email: "ejemplo@email.com",
        image: "https://pro2-bar-s3-cdn-cf4.myportfolio.com/3a227f4b9a8ebe035b7799961cc0c1e8/f26346e8-39cf-43bd-a8fd-cc4b4f20a99b_rw_1920.jpg?h=70be0465b99945d93718517e7636649c"
      },
      {
        id_employee: 1,
        id_job: 2,
        //cellphone: '9442-8566',
        //job_name: 'Miembro de la Junta de Educacion.',
        name: "Elena Martínez Rojas",
        //email: "ejemplo@email.com",
        image: "http://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg"
      },
      {
        id_employee: 1,
        id_job: 2,
        //cellphone: '9442-8566',
        //job_name: 'Miembro de la Junta de Educacion.',
        name: "Eduardo Ramírez Piedra",
        //email: "ejemplo@email.com",
        image: "https://nadiazheng.com/wp-content/uploads/2017/01/Montreal-business-portrait-professional-accoutant-linkedin-profile.jpg"
      },
      {
        id_employee: 1,
        id_job: 2,
        //cellphone: '9442-8566',
        //job_name: 'Miembro de la Junta de Educacion.',
        name: "Milena Brenes Astorga",
        //email: "ejemplo@email.com",
        image: "http://nadiazheng.com/wp-content/uploads/2015/12/Montreal-authentic-natural-professional-headshot.jpg"
      }
    ];
  }

}
