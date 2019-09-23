import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  school: School;

  constructor() { }
  /* esto es para dar la ubicación exacta de la escuela*/
  lat:Number;
  lng:Number;
  ngOnInit() {
    this.getSchool();
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
      celphone: '7525-3654',
      telephone: '2536-5145'
    }
    this.lat = this.school.lat;
    this.lng = this.school.lng;

  }

}
