import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { rider } from './rider';

@Injectable({
  providedIn: 'root'
})
export class RidersService {
  constructor(private http: HttpClient) {}

  getriders(): Observable<rider> {
    // let url: string = 'https://api.myjson.com/bins/1753m4';
    let url: string = '../../assets/riders.json';
    return this.http.get<rider>(url);
  }
}
