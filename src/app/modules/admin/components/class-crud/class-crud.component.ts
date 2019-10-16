import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class-crud',
  templateUrl: './class-crud.component.html',
  styleUrls: ['./class-crud.component.css']
})
export class ClassCrudComponent implements OnInit {

  levels: Level[];
  levelSelect: Level;
  submitted: boolean = false;

  filterLevel: FormGroup;

  constructor(private classServices: ClassService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadLevels();
    this.filterLevel = this.formBuilder.group({
      level: [null, [Validators.required]]
    });
  }

  filter(){
    this.submitted = true;
    if(this.filterLevel.invalid){
      return;
    }else{
      alert(`filtrar por${this.filterLevel.value.level.id_level}`);
    }
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


  get f(){
    return this.filterLevel.controls;
  }

}
