import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  addImage(data) {
    return this.http.post('http://127.0.0.1:8000/api/gallery/', data);
  }

  getGallery() {
    return this.http.get('http://127.0.0.1:8000/api/gallery/');
  }

  deleteImage(id) {
    return this.http.delete(`http://127.0.0.1:8000/api/gallery/${id}`);
  }

}
