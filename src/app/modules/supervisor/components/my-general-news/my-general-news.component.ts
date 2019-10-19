import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { New } from 'src/app/models/new';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-my-general-news',
  templateUrl: './my-general-news.component.html',
  styleUrls: ['./my-general-news.component.css']
})
export class MyGeneralNewsComponent implements OnInit {

  news:New[];
  new:New;

  constructor(private loginService:LoginService,private newsService:NewsService) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews(){
    let data = {
      id_user: this.loginService.getLocal().id_user,
      id_new_type: 1,
    }
    console.log(data);
    this.newsService.getNewByGeneral(data.id_user, data.id_new_type).subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          this.news = r.data;
          this.new = this.news[0];
        } else {
          this.news = [];
          this.new = null;
          console.log('Vacio');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    )
  }
}
