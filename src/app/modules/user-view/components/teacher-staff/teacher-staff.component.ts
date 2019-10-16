import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-teacher-staff',
  templateUrl: './teacher-staff.component.html',
  styleUrls: ['./teacher-staff.component.css']
})
export class TeacherStaffComponent implements OnInit {

  teachers: Employee[];

  constructor() { }

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.teachers = [
      {
        id_employee: 1,
        id_job: 1,
        //job_name: 'Docente',
        //cellphone: '8254-6389',
        name: "Roberto Quesada Alvarado",
        //email: "ejemplo@email.com",
        image: "http://buscarempleo.republica.com/files/2012/05/Saca-el-mayor-partido-a-tus-fotograf%C3%ADas-para-el-curr%C3%ADculum-vitae.jpg"
      },
      {
        id_employee: 1,
        id_job: 1,
        //job_name: 'Profesor musica',
        //cellphone: '8254-6389',
        name: "Aurora Escalante Gómez",
        //email: "ejemplo@email.com",
        image: "https://hannajaff.com/wp-content/uploads/2013/03/foto-para-CV-229x300.jpg"
      },
      {
        id_employee: 1,
        id_job: 1,
        //job_name: 'Asistente administrativo',
        //cellphone: '8254-6389',
        name: "Daniela Quesada Segura",
        //email: "ejemplo@email.com",
        image: "http://www.slainte21.com/wp-content/uploads/2013/10/DSC_9781.jpg"
      },
      {
        id_employee: 1,
        id_job: 1,
        //job_name: 'Profesor Artes Plasticas',
        //cellphone: '8254-6389',
        name: "Luis Herrera López",
        //email: "ejemplo@email.com",
        image: "https://www.planetacurioso.com/wp-content/uploads/2014/03/hacker-millonarios5.jpg"
      }
    ];
  }

}
