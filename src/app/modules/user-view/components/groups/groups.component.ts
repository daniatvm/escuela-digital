import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new';
import { Level } from 'src/app/models/level';
import { ClassService } from 'src/app/services/class.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Class } from 'src/app/models/class';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {


  news: New[];

  levels: Level[];
  levelSelect: Level;

  classes: Class[];
  classFilter: Class[];
  classSelect: Class;

  filterForm: FormGroup;
  submitted: boolean = false;
  constructor(private classServices: ClassService, private formBuilder: FormBuilder, private newsService: NewsService) { }

  ngOnInit() {
    this.loadLevels();
    this.loadClasses();
    this.getNews2();
    this.filterForm = this.formBuilder.group({
      level: [null, [Validators.required]],
      class: [null, [Validators.required]],
    })

  }

  loadLevels() {
    this.classServices.getLevels().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.levels = r.data;
        } else {
          console.log('No hay niveles creados');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    );
  }

  loadClasses() {

    this.classServices.getClasses().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.classes = r.data;
        } else {
          console.log('No hay clases creadas');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    );
  }

  onChange(e) {
    console.log(e);
    this.filterClasses(this.filterForm.value.level.id_level);
    //console.log(this.formCreate.value.level);
    //this.formCreate.value.level = null;
  }

  getNews2() {

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

  filterClasses(id_level) {

    this.filterForm.patchValue({
      class: null
    });
    this.classFilter = this.classes.filter(x => x.id_level == id_level);
  }

  /**
    * Use a service to get news.
    */
  getNews() {
    this.newsService.getNewByClass(this.filterForm.value.class.id_class).subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.news = r.data;
        } else {
          console.log('No hay noticias creadas');
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
      this.getNews();
    }
  }

  get f() {
    return this.filterForm.controls;
  }

}
