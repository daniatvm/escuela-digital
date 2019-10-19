import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-create-level',
  templateUrl: './create-level.component.html',
  styleUrls: ['./create-level.component.css']
})
export class CreateLevelComponent implements OnInit {

  levels: Level[];
  levelSelect: Level;
  submitted: boolean = false;

  msg: string;
  levelForm: FormGroup;

  constructor(private classServices: ClassService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadLevels();
    this.levelForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });

  }

  createLevel() {
    this.msg = "";
    this.submitted = true;

    if (this.levelForm.invalid) {
      this.msg = "Hay errores en la solicitud.";
      return;
    } else {
      let data: any = {
        name: this.levelForm.value.name
      }
      this.classServices.createLevel(data).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            this.loadLevels();
            this.msg = "Nivel creado exitosamente.";
            this.levelForm.setValue({
              name: '.'
            });
          } else {
            console.log('Problema con la creacion');
          }
        },
        err => {
          console.log(err);
          console.log('Problema con el servidor');
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
    return this.levelForm.controls;
  }
}
