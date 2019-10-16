import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { School } from 'src/app/models/school';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {

  updateSchool: FormGroup;
  submitted: boolean = false;

  sended: boolean = false;
  updated: boolean = false;

  school: School;
  response: any;

  /* esto es para dar la ubicación exacta de la escuela*/
  lat: Number;
  lng: Number;

  map: any;

  constructor(private schoolService: SchoolService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getSchool();
    this.createForm();
  }

  createForm() {
    this.updateSchool = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],//30
      email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],//30
      tel: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],//10
      description: ['', [Validators.required, Validators.maxLength(500)]],//500
      lat: [this.lat, [Validators.required, Validators.pattern('^-?([0-9][0-9]?)(.[0-9]{1,6})?$')]],//
      lng: [this.lng, [Validators.required, Validators.pattern('^-?([0-9][0-9]?)(.[0-9]{1,6})?$')]],//
      address: ['', [Validators.required, Validators.maxLength(200)]]//200
    });
  }

  updateForm() {
    this.updateSchool.setValue({
      name: this.school.name,
      email: this.school.email,
      tel: this.school.telephone,
      description: this.school.description,
      lat: this.lat,
      lng: this.lng,
      address: this.school.address,
    });
  }

  mapReady(map) {
    this.map = map;
  }

  get f() {
    return this.updateSchool.controls;
  }
  centerMapOnMarker() {
    var a = { lat: this.lat, lng: this.lng };
    console.log(a);
    if (this.map)
      this.map.setCenter(a);
  }

  send() {
    this.submitted = true;
    if (this.updateSchool.invalid) {
      return;
    } else {
      this.sended = true;
      var data: School = {
        id_school: 1,
        name: this.updateSchool.value.name,
        description: this.updateSchool.value.description,
        address: this.updateSchool.value.address,
        image: '//',
        email: this.updateSchool.value.email,
        telephone: this.updateSchool.value.tel,
        lat: this.updateSchool.value.lat,
        lng: this.updateSchool.value.lng

      }
      this.schoolService.updateSchool(data).subscribe(
        res => {
          this.response = res;
          if (this.response.success) {
            this.updated = true;
            this.getSchool();
          } else {
            this.updated = false;
          }
        },
        err => {
          this.updated = false;
          console.log('false');
          console.error(err);
        }
      );
    }
  }

  getSchool() {
    this.schoolService.getSchool().subscribe(
      res => {
        this.response = res;
        if (this.response.success) {
          this.school = this.response.data[0];
          this.lat = this.school.lat;
          this.lng = this.school.lng;
          this.updateForm();
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
