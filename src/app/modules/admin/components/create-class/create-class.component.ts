import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

  levels: Level[];
  levelSelect: Level;

  submitted: boolean = false;

  classForm: FormGroup;

  constructor(private classServices: ClassService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadLevels();
    this.classForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      level: [null, [Validators.required]]
    });
  }


  createClass() {
    this.submitted = true;
    if (this.classForm.invalid) {
      return;
    } else {
      let data = {
        name: this.classForm.value.name,
        id_level: this.classForm.value.level.id_level
      }
      this.classServices.createClass(data).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            alert('clase creada');
          } else {
            console.log('error al crear la clase')
          }

        },
        err => {
          console.log(err);
          console.log('Error contectando con laravel.');
        }
      );
    }
  }

  loadLevels() {
    this.classServices.getLevels().subscribe(
      res => {
        var r: any = res;
        if (r.success) {
          this.levels = r.data;
          console.log(this.levels);
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

  get f() {
    return this.classForm.controls;
  }

}
