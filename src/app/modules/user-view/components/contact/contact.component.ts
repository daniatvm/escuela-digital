import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  school: School;

  map: any;


  constructor(private schoolService: SchoolService) { }
  /* esto es para dar la ubicación exacta de la escuela*/
  lat: Number = 0;
  lng: Number = 0;
  ngOnInit() {
    this.getSchool();
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
          this.lat = this.school.lat;
          this.lng = this.school.lng;
          this.centerMapOnMarker();
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

  mapReady(map) {
    this.map = map;
  }

  centerMapOnMarker() {
    let a = { lat: this.lat, lng: this.lng };
    if (this.map)
      this.map.setCenter(a);
  }

}
