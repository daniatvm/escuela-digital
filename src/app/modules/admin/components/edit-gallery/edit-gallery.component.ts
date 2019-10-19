import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from 'src/app/models/gallery';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.css']
})
export class EditGalleryComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;

  gallery: Gallery[];
  constructor(private formBuilder: FormBuilder, private galleryService: GalleryService) { }

  ngOnInit() {
    this.loadGallery();
    this.addForm = this.formBuilder.group(
      {
        image: ['', [Validators.required]]
      }
    )
  }


  loadGallery() {
    this.galleryService.getGallery().subscribe(
      res => {
        let r: any = res;
        if (r.success) {
          this.gallery = r.data;
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

  delete(e) {

    this.galleryService.deleteImage(e.value).subscribe(
      res => {
        let r : any = res;
        this.loadGallery();
      },
      err => {
        console.log(err);
      }
    )
  }

  add() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    } else {
      let data = {
        id_school: 1,
        image: this.addForm.value.image
      }
      this.galleryService.addImage(data).subscribe(
        res => {
          let r: any = res;
          if (r.success) {
            this.loadGallery();
          } else {
            console.log('Error al agregar imagen');
          }
        },
        err => {
          console.log(err);
          console.log('Error con laravel');
        }
      )
    }
  }

  get f() {
    return this.addForm.controls;
  }

}
