import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private galleryUrl = `${API_URL}/gallery`;

  constructor(private http: HttpClient) {}

  getGallery(): Observable<any[]> {
    return this.http.get<any[]>(this.galleryUrl);
  }
}
