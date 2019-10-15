import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new';
import { School } from 'src/app/models/school';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: New[];
  school: School;


  constructor() { }

  ngOnInit() {
    this.getNews();
    this.getSchool();
  }

  /**
     * Use a service to get news.
     */
  getNews() {
    this.news = [
      {
        id_new: 1,
        id_user: 1,
        title: "Gran Bingo Familiar",
        description: "Este 13 de septiembre acérquese a nuestras instalaciones con sus pequeños y disfrute de esta noche ya que tendremos muchos premios.",
        image: "http://4.bp.blogspot.com/-eFPm-A1hGl4/VhlPJVz49gI/AAAAAAAAFQo/i_rKC-1xjM0/s1600/tarde-de-bingo-galerias-vallarta.png",
        date: new Date
      },
      {
        id_new: 1,
        id_user: 1,
        title: "PENDIENTE",
        description: "...",
        image: "http://4.bp.blogspot.com/-eFPm-A1hGl4/VhlPJVz49gI/AAAAAAAAFQo/i_rKC-1xjM0/s1600/tarde-de-bingo-galerias-vallarta.png",
        date: new Date
      }
    ];
  }

  /**
     * Use a service to get school info.
     */
  getSchool() {
    this.school = {
      name: 'Escuela República Dominicana',
      description: 'La escuela es una de las instituciones más importantes en la vida de una persona, quizás también una de las primordiales luego de la familia, ya que en la actualidad se supone que el niño se integra a ella desde sus años tempranos para finalizarla normalmente cerca de su adultez. Si bien puede haber variantes en sus denominaciones, la escuela primaria y secundaria es la base de la educación de cualquier individuo.',
      lat: 9.911337,
      lng: -84.056983,
      address: 'San Francisco de dos Ríos.',
      image: '',
      email: 'escuelarepublicadominicana@yahoo.es',
      telephone: '2536-5145'
    }
  }

}
