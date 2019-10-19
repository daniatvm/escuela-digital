import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: Gallery[];
  photo: Gallery;


  constructor(private galleryService:GalleryService) { }

  ngOnInit() {
    this.loadImages();
  }





  loadImages() {
    this.galleryService.getGallery().subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          this.gallery = r.data;

          this.photo = this.gallery[0];
          this.gallery.shift();

        } else {
          this.gallery = [];
          console.log('No hay imagenes');
        }
      },
      err => {
        console.log(err);
        console.log('Error con laravel');
      }
    )
  }
}
