import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: any[];
  firstImage: any;


  constructor() { }

  ngOnInit() {
    this.loadImages();
  }





  loadImages() {
    this.images = [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/The_Woodlands_College_Park_Front_Image.jpg'
      },
      {
        url: 'https://static.iris.net.co/semana/upload/images/2019/5/24/616850_1.jpg'
      },
      {
        url: 'https://balneaguaformacion.com/wp-content/uploads/2014/03/Mantenimiento-piscinas1.jpg'
      },
      {
        url: 'https://cdn.ultraplay.com/uploads/products/uPLAY-006-P_MaddiesChase_Houston_TX_0767.jpg'
      },
    ];
    this.firstImage = this.images[0];
    this.images.shift();

  }
}
