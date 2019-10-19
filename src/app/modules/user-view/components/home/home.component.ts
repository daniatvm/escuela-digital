import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/services/school.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: New[];
  school: School;


  constructor(private schoolService: SchoolService, private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
    this.getSchool();
  }

  /**
     * Use a service to get news.
     */
  getNews() {

    this.newsService.getNewByNewType(1).subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          this.news = r.data;
        } else {
          this.news = [];
          console.log('No hay noticias');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    )
  }

  /**
     * Use a service to get school info.
     */
  getSchool() {
    this.schoolService.getSchool().subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          this.school = r.data[0];
        } else {
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
