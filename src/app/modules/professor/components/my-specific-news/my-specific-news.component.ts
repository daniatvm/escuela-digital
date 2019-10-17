import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ClassService } from 'src/app/services/class.service';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';
import { New } from 'src/app/models/new';

@Component({
  selector: 'app-my-specific-news',
  templateUrl: './my-specific-news.component.html',
  styleUrls: ['./my-specific-news.component.css']
})
export class MySpecificNewsComponent implements OnInit {

  ownClasses: Class[];
  ownClass: Class;

  filterForm: FormGroup;
  submitted: boolean = false;

  news:New[];
  new:New;

  constructor(
    private classService: ClassService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private newsService: NewsService) { }

  ngOnInit() {
    this.loadClasses();
    this.filterForm = this.formBuilder.group({
      class: [null, [Validators.required]]
    });
  }

  loadClasses() {
    this.classService.getClassByEmployee(this.loginService.getLocal().id_employee).subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          console.log(r.data);
          this.ownClasses = r.data;
          this.ownClass = this.ownClasses[0];
        } else {
          console.log('No hay clases asociadas.');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    );
  }

  filter() {
    this.submitted = true;

    if (this.filterForm.invalid) {
      return;
    } else {
      let data = {
        id_user: this.loginService.getLocal().id_user,
        id_new_type: 2,
        id_class: this.filterForm.value.class.id_class
      }
      console.log(data);
      this.newsService.getNewByForeing(data.id_user, data.id_new_type, data.id_class).subscribe(
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

  get f() {
    return this.filterForm.controls;
  }

}
