import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RidersService {
  constructor(private http: HttpClient) {}

  getriders(): Observable<rider> {
    let url: string = 'https://api.myjson.com/bins/1753m4';
    return this.http.get<Observable>(url);
  }
}

interface rider {
  name: string;
}
