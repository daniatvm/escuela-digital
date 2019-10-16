import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: New[];
  school: School;


  constructor(private schoolService:SchoolService) { }

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
    this.schoolService.getSchool().subscribe(
      res => {
        let r :any = res;
        if(r.success){
          this.school = r.data[0];
        }else{
          console.log('No hay escuela');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    );
  }

}
