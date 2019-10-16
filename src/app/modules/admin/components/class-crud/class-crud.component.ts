import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { FormBuilder } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class-crud',
  templateUrl: './class-crud.component.html',
  styleUrls: ['./class-crud.component.css']
})
export class ClassCrudComponent implements OnInit {

  levels: Level[];
  levelSelect: Level;


  constructor(private classServices: ClassService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadLevels();
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


}
