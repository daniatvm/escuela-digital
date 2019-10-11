import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { Class } from 'src/app/models/class';

import { Validator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-specific-new',
  templateUrl: './create-specific-new.component.html',
  styleUrls: ['./create-specific-new.component.css']
})
export class CreateSpecificNewComponent implements OnInit {

  levels: Level[];
  classes: Class[];
  classFilter: Class[];

  selectedLevel: Level;
  selectedClass: Class;

  formCreate: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadLevels();
    this.loadClasses();

    this.formCreate = this.formBuilder.group({
      level: [null, [Validators.required]],
      class: [null, [Validators.required]],
      title: ["", [Validators.required, Validators.maxLength(25)]],
      description: ["",[Validators.required, Validators.maxLength(200)]]
    });
  }

  get f() { return this.formCreate.controls; }

  loadLevels() {
    this.levels = [
      {
        id_level: 1,
        name: 'primero'
      },
      {
        id_level: 2,
        name: 'segundo'
      },
      {
        id_level: 3,
        name: 'tercero'
      },
    ];
    this.selectedLevel = this.levels[0];
  }

  loadClasses() {
    this.classes = [
      {
        id_level: 1, id_class: 1, name: '1-1'
      },
      {
        id_level: 1, id_class: 2, name: '1-2'
      },
      {
        id_level: 2, id_class: 3, name: '2-1'
      },
      {
        id_level: 2, id_class: 4, name: '2-2'
      },
      {
        id_level: 3, id_class: 5, name: '3-1'
      },
      {
        id_level: 3, id_class: 6, name: '3-2'
      },
    ]
  }

  onChange(e) {
    console.log(e);
    this.filterClasses(this.formCreate.value.level.id_level);
    //console.log(this.formCreate.value.level);
    //this.formCreate.value.level = null;
  }

  create() {
    this.submitted = true;

    if (this.formCreate.invalid) {
      return;
    } else {
      alert('Todo bien');
    }
  }

  filterClasses(id_level) {

    this.formCreate.patchValue({
      class: null
      // formControlName2: myValue2 (can be omitted)
    });
    this.classFilter = this.classes.filter(x => x.id_level == id_level);
  }
}
