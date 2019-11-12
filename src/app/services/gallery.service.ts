import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from "./url.constants";
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  addImage(data) {
    return this.http.post(`${api}/gallery/`, data);
  }

  getGallery() {
    return this.http.get(`${api}/gallery/`);
  }

  deleteImage(id) {
    return this.http.delete(`${api}/gallery/${id}`);
  }

}
