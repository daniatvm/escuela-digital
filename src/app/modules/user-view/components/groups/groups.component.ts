import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  profesor: string = "profesor";

  news: New[];

  constructor() { }

  ngOnInit() {
    this.getNews();
  }


  /**
    * Use a service to get news.
    */
  getNews() {
    this.news = [

      {
        id_new: 1,
        id_class: 1,
        id_user: 1,
        class_name: '1-1',
        created_by: 'Ana Vargas Vargas',
        title: 'Se suspende clases para el 12 de Septiembre.',
        description: "Por motivos de incapacidad los estudiantes no tendran clases.",
        date: new Date,
        image: 'https://2.bp.blogspot.com/-yf16cM8g1h8/WRJOUvNQpEI/AAAAAAAAA1g/ve_c0lu62GgIzACs7IyU55kK46oGsFtTQCLcB/s1600/latam_nohayclases-1.jpg'
      },
      {
        id_new: 2,
        id_class: 1,
        id_user: 1,
        class_name: '1-1',
        created_by: 'Ana Vargas Vargas',
        title: 'Reunión de padres',
        description: "La reunión ser será el próximo lunes 16 de septiembre.",
        date: new Date,
        image: 'http://www.cadenamaxima.com.ar/cadmawp/wp-content/uploads/2019/04/2019-04-04_16-34-28_463984-columna-de-educacion-la-importancia-de-la-primer-reunion-de-padres-del-ano-768x400.jpg'
      },
      {
        id_new: 3,
        id_class: 1,
        id_user: 1,
        class_name: '1-1',
        created_by: 'Ana Vargas Vargas',
        title: 'aviso 3',
        description: "en espera",
        date: new Date,
        image: 'http://www.cadenamaxima.com.ar/cadmawp/wp-content/uploads/2019/04/2019-04-04_16-34-28_463984-columna-de-educacion-la-importancia-de-la-primer-reunion-de-padres-del-ano-768x400.jpg'
      },
    ];

  }

  foo() {
    this.profesor = "juan"
  }


}
