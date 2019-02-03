import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { galleryItem } from './galleryItem';
import { Observable } from 'rxjs';

@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}
  getPhotos(page): Observable<galleryItem> {
    let url: string =
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e2510bdf1395a3b40da1c44fb3f6d0d5&tags=bikerace, BoulderBikeTour&per_page=20&page=' +
      page +
      '&format=json&nojsoncallback=1';
    return this.http.get<galleryItem>(url);
  }
}
